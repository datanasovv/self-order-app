import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
  Paper,
} from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import ChooseScreen from "./screens/ChooseScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SelectPaymentScreen from "./screens/SelectPaymentScreen";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: { fontSize: "2rem", color: "black" },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: { main: "#118e16", contrastText: "#ffffff" },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact={true}></Route>
            <Route
              path="/select-payment"
              component={SelectPaymentScreen}
              exact={true}
            ></Route>
            <Route
              path="/payment"
              component={PaymentScreen}
              exact={true}
            ></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
