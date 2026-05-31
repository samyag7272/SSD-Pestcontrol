/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="our-services" element={<Services />} />
          <Route path="our-services/:serviceId" element={<ServiceDetail />} />
          <Route path="our-locations" element={<Locations />} />
          <Route path="our-locations/:locationId" element={<LocationDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
