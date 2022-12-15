import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faClock} from "@fortawesome/free-solid-svg-icons";
import {headerNavLinks} from "../utils/headerNavLinks";
import {NavLink} from "react-router-dom";

import '../styles/Header.css'
import {Logo} from "../components/Logo";

const headerIconMargin = 'm-2'
const headerFontFamily = {fontFamily: 'Open Sans'}
export const Header = () => {
	const navLinks = headerNavLinks.map(link => (
		<NavLink className={"links--link"} key={link.name} to={link.path}>{link.name}</NavLink>
	))
	return (
		<header className={"header"}>
			<div className={"flex justify-around items-center bg-japaneseIndygo p-3 text-white font-bold header--info"} style={headerFontFamily}>
				<span>
					<FontAwesomeIcon icon={faEnvelope} size={"lg"} color={"#FDD428"}/>
					<a href={"mailto:example@example.com"} target={"_blank"} rel="noreferrer" className={headerIconMargin}>example@example.com</a>
				</span>
				<span></span>
				<span>
					<FontAwesomeIcon icon={faClock} size={"lg"} color={"#FDD428"}/>
					<span className={headerIconMargin}>Czat: Pn-Sb 8:00-22:00</span>
				</span>
			</div>
			<div className={"flex justify-around items-center bg-white p-3 font-bold opacity-80 header--nav-main"}>
				<Logo/>
				<nav className={"flex justify-between w-80 uppercase nav-main--links"}>
					{navLinks}
				</nav>
				<span></span>
			</div>
		</header>
	)
}