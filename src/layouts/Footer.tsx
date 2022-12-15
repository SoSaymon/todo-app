import {Logo} from "../components/Logo";

import '../styles/Footer.css'
import {Newsletter} from "../components/footer/Newsletter";
import {footerPageLinks} from "../utils/footerPageLinks";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {footerSocialLinks} from "../utils/footerSocialLinks";

export const Footer = () => {
	const pageLinks = footerPageLinks.map(link => (
		<Link key={link.name} to={link.path}>{link.name}</Link>
	))

	const socialLinks = footerSocialLinks.map(link => (
		<div key={link.name} className={"flex items-center w-full mb-4 social__link"}>
			<FontAwesomeIcon icon={link.icon} className={"text-white"} size={"lg"}/>
			<a href={link.href} className={"ml-3 font-bold text-lg text-white"}>{link.name}</a>
		</div>
	))

	return (
		<footer className={"flex flex-col footer"}>
			<div className={"flex justify-center items-center w-full bg-yankeesBlue footer__top"}>
				<div className={"flex container"}>
					<div className={"flex max-h-96 w-1/2 p-5 top__newsletter"}>
						<Newsletter/>
					</div>
					<div className={"flex justify-around w-1/2 p-5 top__links"}>
						<div className={"flex flex-col justify-center links__site"}>
							{pageLinks.map((pageLink) => (
								<div key={pageLink.key} className={"mb-4 text-white font-semibold"} style={{fontFamily: 'Open Sans'}}>
									{pageLink}
								</div>
							))}
						</div>
						<div className={"flex flex-col justify-center w-1/3 links__social"}>
							{socialLinks}
						</div>
					</div>
				</div>
			</div>
			<div className={"flex justify-center w-full bg-japaneseIndygo footer__bottom"}>
				<div className={"flex container"}>
					<div className={"flex items-center w-1/3 p-5 bottom__logo"}>
						<Logo color={"white"} opacity={0.8}/>
					</div>
					<div className={"flex justify-center items-center w-1/3 p-5 font-semibold text-white opacity-80 bottom__copyright"}>
						<span>&#169; 2022 All rights reserved <a href={'https://github.com/SoSaymon'} target={'_blank'} rel="noreferrer">SoSaymon</a></span>
					</div>
					<div className={"flex justify-end items-center w-1/3 p-5 font-semibold text-white opacity-80 bottom__designed-by"}>
						<span>Designed by <a href={'https://github.com/SoSaymon'} target={'_blank'} rel="noreferrer">SoSaymon</a></span>
					</div>
				</div>
			</div>
		</footer>
	)
}