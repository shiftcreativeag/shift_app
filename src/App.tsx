import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/Main/MainPage";
import { DocumentsPage } from "./pages/Documents/DocumentsPage";
import Cookies from '../src/components/Cookies/Cookies';
import { useState } from "react";

const App = () => {

  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const handleCookiesClose = () => {
    setCookiesAccepted(true);
  };

  return (
    <>
      {!cookiesAccepted && <Cookies onClose={handleCookiesClose} />}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<MainPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </>
  );
}

export default App
