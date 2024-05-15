// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from './components/theme-provider';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard'; // Make sure this component exists
// import ProjectEdit from './pages/ProjectEdit'; // Make sure this component exists
// import BlogEdit from './pages/BlogEdit'; // Make sure this component exists
// import ContactFormData from './pages/ContactFormData'; // Make sure this component exists
// import PrivateRoute from './Auth/PrivateRoute';
import { AuthProvider } from './Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/project-edit">
              <ProjectEdit />
            </PrivateRoute>
            <PrivateRoute path="/blog-edit">
              <BlogEdit />
            </PrivateRoute>
            <PrivateRoute path="/contact-form-data">
              <ContactFormData />
            </PrivateRoute> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
