import { AccountBookProvider } from "./contexts/AccountBookContext.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CategoryAnalysisPage from "./pages/CategoryAnalysisPage.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { DateProvider } from "./contexts/DateContext.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import React from "react";

function App() {
    return (
        <Router>
            <DefaultLayout>
                <ThemeProvider>
                    <DateProvider>
                        <AccountBookProvider>
                            <Routes>
                                <Route path="/" element={<MainPage />} />
                                <Route path="/category-analysis" element={<CategoryAnalysisPage />} />
                            </Routes>
                        </AccountBookProvider>
                    </DateProvider>
                </ThemeProvider>
            </DefaultLayout>
            <Footer />
        </Router>
    );
}

export default App;
