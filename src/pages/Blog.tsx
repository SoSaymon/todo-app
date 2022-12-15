import {useEffect} from "react";
import {TextBox} from "../components/main/TextBox";

export const Blog = () => {
	useEffect(() => {window.onload = () => {console.log('loaded')} }, [])
	return (
		<main className={"flex flex-col justify-center items-center flex-wrap home"}>
			<TextBox title={"Some amazing text"} text={"fermentum olo vel orci porta non pulvinar neque laoreet suspendisse"}/>
			{/*<WhyChooseUs/>*/}
		</main>
	)
}