import { getAccessToken } from './auth';

export async function createSpreadsheet(title: string): Promise<string> {
  const token = await getAccessToken();
  if (!token) throw new Error('Not authenticated with Google');

  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title: title,
      },
      sheets: [
        {
          properties: {
            title: 'Bookings',
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || 'Failed to create spreadsheet');
  }

  const data = await res.json();
  
  // Set headers
  await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${data.spreadsheetId}/values/A1:D1?valueInputOption=USER_ENTERED`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [['Date', 'Name', 'Phone', 'Source']],
    }),
  });

  return data.spreadsheetId;
}

export async function appendRowToSheet(spreadsheetId: string, values: string[]) {
  const token = await getAccessToken();
  if (!token) throw new Error('Not authenticated with Google');

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Bookings!A:A:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [values],
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || 'Failed to append to spreadsheet');
  }

  return await res.json();
}
