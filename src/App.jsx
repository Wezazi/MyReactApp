
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/HomePage.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import About from "./Pages/AboutPage.jsx";
import Terminal from "./Pages/TerminalPage.jsx";
import Profiles from "./Pages/ProfilesPage.jsx";
import Navbar from "./Navbar.jsx";


function App() {
	return(
		<>
			<BrowserRouter>
				<Navbar></Navbar> {/*This makes the navbar appear in all pages, you can do the same for other elements, e.g. if you want all pages to start with the same header or end with the same footer*/}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					
					{/*<Route path="/terminal" element={<Terminal />} /> */}

					{/* <Route path="/profiles" element={<Profiles />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
