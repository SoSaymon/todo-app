import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faClock} from "@fortawesome/free-solid-svg-icons";
import {headerNavLinks} from "../utils/headerNavLinks";
import {NavLink} from "react-router-dom";

import '../styles/Header.css'
import {Logo} from "../components/Logo";
import {useEffect} from "react";

export const Header = () => {
	const navLinks = headerNavLinks.map(link => (
		<NavLink className={"links__link"} key={link.name} to={link.path}>{link.name}</NavLink>
	))

	useEffect(() => {
		window.onscroll = function () {
			scrollCallback();
		}

		const navbar = document.querySelector('.header__nav-main') as HTMLElement
		const main = document.querySelector('main') as HTMLElement
		const sticky = navbar?.offsetTop

		const scrollCallback = () => {
			if (window.pageYOffset > sticky) {
				navbar?.classList.add("sticky")
				if (main) {
					main.style.paddingTop = '50px'
				}
			} else {
				navbar?.classList.remove("sticky")
				if (main) {
					main.style.paddingTop = '0'
				}
			}
		}
	}, [])

	return (
		<header className={"header"}>
			<div className={"flex justify-around items-center w-full p-3 bg-japaneseIndygo text-white font-bold header__info"} style={{fontFamily: 'Open Sans'}}>
				<div className={"flex justify-between items-center container info__container"}>
					<span className={"container__mail"}>
					<FontAwesomeIcon icon={faEnvelope} size={"lg"} color={"#FDD428"}/>
					<a href={"mailto:example@example.com"} target={"_blank"} rel="noreferrer" className={"m-2"}>example@example.com</a>
				</span>
					<span className={"container__spacer"}></span>
					<span className={"container__chat-hours"}>
					<FontAwesomeIcon icon={faClock} size={"lg"} color={"#FDD428"}/>
					<span className={"m-2"}>Czat: Pn-Sb 8:00-22:00</span>
				</span>
				</div>
			</div>
			<div className={"flex justify-around items-center p-3 bg-white opacity-80 font-bold header__nav-main"}>
				<div className={"flex justify-between items-center container nav-main__container"}>
					<Logo/>
					<nav className={"flex justify-between w-80 uppercase nav-main__links"}>
						{navLinks}
					</nav>
					<span className={"container__spacer"}></span>
				</div>
			</div>
		</header>
	)
}