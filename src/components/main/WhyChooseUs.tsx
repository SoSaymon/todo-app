import img from '../../img/main/why-choose-us.jpg';
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const WhyChooseUs = () => {
	return (
		<div className={"flex justify-center items-center w-full h-screen bg-white home__why-choose-us"}>
			<div className={"flex flex-col justify-between items-center w-full h-full p-16 why-choose-us__container"}>
				<h1 className={"text-4xl font-bold mb-20 why-choose-us__title"}>Why choose us?</h1> {/*make underline after title*/}
				<div className={"flex justify-between items-center w-full h-full why-choose-us__content"}>
					<div className={"flex items-center w-1/2 h-full content__image-container"}>
						<img className={"rounded-xl image-container__img"} src={img} alt={'meeting'}/>
					</div>
					<div className={"flex flex-col justify-between items-center w-1/2 h-full content__text-container"}>
						<div className={"w-96 p-4 text-container__item"}>
							<span className={"text-xl font-bold"}>
								<FontAwesomeIcon icon={faComment} className={"mr-4"} size={"lg"}/>
								<span>Amazing text</span>
							</span>
							<p className={"text-md mt-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						</div>
						<div className={"w-96 p-4 text-container__item"}>
							<span className={"text-xl font-bold"}>
								<FontAwesomeIcon icon={faComment} className={"mr-4"} size={"lg"}/>
								<span>Amazing text</span>
							</span>
							<p className={"text-md mt-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						</div>
						<div className={"w-96 p-4 text-container__item"}>
							<span className={"text-xl font-bold"}>
								<FontAwesomeIcon icon={faComment} className={"mr-4"} size={"lg"}/>
								<span>Amazing text</span>
							</span>
							<p className={"text-md mt-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}