import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Root = () => {
	return <div>
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<div>This is React Router v6</div>} />
			<Route path="/test" element={<div>This is Test Page</div>} />
			<Route path="*" element={<div><h3>404 Not Found</h3></div>} />
		</Routes>
		</BrowserRouter>
	</div>
}

export default Root