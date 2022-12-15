import '../styles/Main.css'

import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home";

export const Main = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home/>} />
		</Routes>
	)
}