import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/next"
import CssBaseline from "@mui/material/CssBaseline";
import muiTheme from "./theme/muiTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
// import AccomplishmentsPage from "./pages/AccomplishmentsPage";
// import WritingPage from "./pages/WritingPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import I18nSync from "./components/I18nSync";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <I18nSync />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/accomplishments" element={<AccomplishmentsPage />} /> */}
          {/* <Route path="/writing" element={<WritingPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
      <Analytics />
  </QueryClientProvider>
);

export default App;
