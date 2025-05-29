import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/Main/MainPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App
