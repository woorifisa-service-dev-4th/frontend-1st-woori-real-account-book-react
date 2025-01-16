import { AccountBookProvider } from "./contexts/AccountBookContext.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CategoryAnalysisPage from "./pages/CategoryAnalysisPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <Router >
      <AccountBookProvider>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/category-analysis" element={<CategoryAnalysisPage />} />
          </Routes>
        <Footer />
      </AccountBookProvider>
    </Router>
  )
}

export default App
