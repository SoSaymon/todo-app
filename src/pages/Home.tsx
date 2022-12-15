import '../styles/Home.css';

import {TextBox} from "../components/main/TextBox";
import {WhyChooseUs} from "../components/main/WhyChooseUs";
import {useEffect} from "react";

export const Home = () => {
	useEffect(() => {window.onload = () => {console.log('loaded')} }, [])
	return (
		<main className={"flex flex-col justify-center items-center flex-wrap home"}>
			<TextBox title={"Some amazing text"} text={"fermentum leo vel orci porta non pulvinar neque laoreet suspendisse"}/>
			<WhyChooseUs/>
		</main>
	)
}