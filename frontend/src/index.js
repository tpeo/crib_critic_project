import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import LandingPage from './pages/property-landing/LandingPage';
import FrontPage from './pages/front-page/FrontPage';
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Poppins",
        colors: {
          //Burnt Orange, Beige, Tan, Black, Grey, Skyblue
          custom: [
            "#FB8B24",
            "#F1B279",
            "#F6E7D7",
            "#2C2B3C",
            "#565E74",
            "#D2E1F8",
            "#FFFFFF",
            "",
            "",
            "",
          ],
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/property_landing/:name" element={<LandingPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
