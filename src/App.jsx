import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import RestView from "./pages/RestView";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant_view/:id" element={<RestView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
