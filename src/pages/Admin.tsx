import { useState, useEffect } from 'react';
import { initAuth, googleSignIn, logout, getAccessToken } from '../lib/auth';
import { User } from 'firebase/auth';
import { createSpreadsheet } from '../lib/googleSheets';

export default function Admin() {
  const [needsAuth, setNeedsAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [spreadsheetId, setSpreadsheetId] = useState<string>('');
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const unsub = initAuth(
      (u, token) => {
        setUser(u);
        setNeedsAuth(false);
      },
      () => {
        setUser(null);
        setNeedsAuth(true);
      }
    );
    return () => unsub();
  }, []);

  useEffect(() => {
    const savedId = localStorage.getItem('ssd_spreadsheet_id');
    if (savedId) {
      setSpreadsheetId(savedId);
    }
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setNeedsAuth(false);
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setNeedsAuth(true);
  };

  const handleCreateSheet = async () => {
    if (isCreating) return;
    const confirmed = window.confirm('Create a new Google Sheet named "SSD Pest Control Bookings" in your Google Drive?');
    if (!confirmed) return;

    setIsCreating(true);
    try {
      const id = await createSpreadsheet('SSD Pest Control Bookings');
      setSpreadsheetId(id);
      localStorage.setItem('ssd_spreadsheet_id', id);
      alert('Spreadsheet created successfully!');
    } catch (err: any) {
      alert('Error creating spreadsheet: ' + err.message);
    } finally {
      setIsCreating(false);
    }
  };

  const validateSheet = async () => {
     let sid = prompt("If you already have a spreadsheet ID, enter it here:", spreadsheetId);
     if (sid) {
       setSpreadsheetId(sid);
       localStorage.setItem('ssd_spreadsheet_id', sid);
     }
  };


  return (
    <div className="container py-12">
      <h1 className="section-h2 mb-4">Admin Dashboard</h1>
      <p className="mb-8 text-ink-60">Connect the application to Google Sheets to store booking requests.</p>

      {needsAuth ? (
        <div className="bg-surface-2 p-8 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold mb-4">Sign in to connect Google Sheets</h2>
          <button className="gsi-material-button inline-flex items-center" onClick={handleLogin} disabled={isLoggingIn}>
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper flex items-center bg-white border border-slate-300 rounded px-4 py-2 hover:bg-slate-50 transition-colors shadow-sm">
              <div className="gsi-material-button-icon mr-3">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'block', width: '24px', height: '24px' }}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="gsi-material-button-contents font-medium text-slate-700">{isLoggingIn ? 'Signing in...' : 'Sign in with Google'}</span>
            </div>
          </button>
        </div>
      ) : (
        <div className="bg-surface-2 p-8 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img src={user?.photoURL || ''} alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <div className="font-bold text-lg">{user?.displayName}</div>
                <div className="text-ink-60">{user?.email}</div>
              </div>
            </div>
            <button onClick={handleLogout} className="btn-outline">Sign Out</button>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold mb-4">Spreadsheet Configuration</h3>
            {spreadsheetId ? (
              <div className="bg-green-50 text-green-900 p-4 rounded mb-4">
                <div className="font-bold mb-1">✓ Connected to Google Sheets</div>
                <div className="text-sm opacity-80 break-all mb-3">Spreadsheet ID: {spreadsheetId}</div>
                <div className="flex gap-4">
                  <a href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}`} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2">Open Spreadsheet ↗</a>
                  <button onClick={validateSheet} className="btn-outline text-sm py-2">Change ID</button>
                </div>
                <p className="mt-4 text-sm text-green-800">
                  When a user submits a form on the website, it will automatically be appended to this sheet.<br/>
                  <em>Note: You must be signed in for the prototype to write to your Sheet.</em>
                </p>
              </div>
            ) : (
              <div>
                <p className="mb-4 text-ink-60">You have not connected a Google Spreadsheet yet. You can create a new one automatically, or link an existing one.</p>
                <div className="flex gap-4">
                   <button onClick={handleCreateSheet} disabled={isCreating} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                     {isCreating && (
                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                     )}
                     {isCreating ? 'Creating...' : 'Create New Spreadsheet'}
                   </button>
                   <button onClick={validateSheet} className="btn-outline">Link Existing Sheet</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
