import "./App.css"

function App() {
	return (
		<div className="container">
			<h1 className="title">Visual Generation AI</h1>
			<p className="description">
				Enter your text and let the AI generate stunning visuals.
			</p>
			<textarea className="textarea" />
			<button className="button">Generate</button>
			<img
				src="https://via.placeholder.com/150"
				alt="Generated Image"
				className="image"
			/>
		</div>
	)
}

export default App
