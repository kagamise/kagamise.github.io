import { Theme, ThemeProvider } from "@emotion/react";
import Home from "./routes/home";
import Navbar from "./core/navbar";
import Footer from "./core/footer";

const theme: Theme = {
	primary: "#CB5182",
	secondary: "#E5A8C1",
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Home />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
