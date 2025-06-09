import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/Main/MainPage";
import { DocumentsPage } from "./pages/Documents/DocumentsPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<MainPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </>
  );
}

export default App
