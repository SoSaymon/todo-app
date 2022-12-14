import {useNavigate} from "react-router-dom";

interface TextBoxProps {
	title: string,
	text: string
}
export const TextBox = ({title, text}: TextBoxProps) => {
	const navigate = useNavigate();
	return (
		<div className={"flex flex-col container home__text-holder"}>
			<div className={"w-1/2 p-5 bg-white bg-opacity-70 rounded-3xl text-holder__content--holder"}>
				<h1 className={"text-3xl font-bold"}>{title}</h1>
				<p className={"text-lg"}>{text}</p>
				<button className="content-holder__btn font-bold" onClick={() => navigate('/app')}>Start planning now!</button>
			</div>
		</div>
	)
}