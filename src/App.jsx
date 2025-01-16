import { AccountBookProvider } from "./contexts/AccountBookContext.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CategoryAnalysisPage from "./pages/CategoryAnalysisPage.jsx";
import Footer from "./components/Footer.jsx";
import {ThemeProvider} from "./contexts/ThemeContext.jsx";

function App() {

  return (
    <Router >
        <ThemeProvider>
            <AccountBookProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/category-analysis" element={<CategoryAnalysisPage />} />
                </Routes>
                <Footer />
            </AccountBookProvider>
        </ThemeProvider>
    </Router>
  )
}

export default App
