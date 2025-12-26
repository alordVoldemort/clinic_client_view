import AppRouter from "./router/AppRouter";
import { AppointmentProvider } from "./context/AppointmentContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AppointmentProvider>
          <AppRouter />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AppointmentProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
