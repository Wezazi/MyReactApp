import Profile from "./Components/Profile.jsx";


function App() {
	return(
		<>
			<Profile title = "John Pork" age = "300" calling = {true} john = {true}/>
			<Profile title = "Anna" age = "5000" calling = {false} john = {false}/>
			<Profile title = "Peter Mcneeley" age = "32" calling = {true} john = {false}/>
		</>
	)
}

export default App
