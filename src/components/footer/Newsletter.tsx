import {useState} from "react";

export const Newsletter = () => {

	const [email, setEmail] = useState<string>('')
	const [submitted, setSubmitted] = useState<boolean>(false)

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (email.length > 0 && email.includes('@')) {
			setSubmitted(prevState => !prevState)
			console.log('Email submitted')
			console.log(submitted)
			console.log('Sending to server...')

			setEmail('')
			setSubmitted(false)
		}
	}

	const handleChange = (e: any) => {
		setEmail(e.target.value)
	}

	return (

		<div className={"flex flex-col justify-center items-center w-full p-16 rounded-xl bg-japaneseIndygo newsletter"}>
			<div className={"flex flex-col justify-center items-start w-full mb-1 newsletter__text"}>
				<h4 className={"text-white font-bold text-3xl newsletter__text newsletter__text--header"}>Sing up for email alerts</h4>
				<p className={"text-white text-opacity-80 text-md newsletter__text newsletter__text--paragraph"}>Get the latest news, stats, and more</p>
			</div>

			<form onSubmit={handleSubmit} className={"flex justify-between items-center w-full mt-8 newsletter__form"}>
				<div className={"flex flex-col w-2/3 newsletter__form newsletter__form--input"}>
					<input value={email} onChange={handleChange} className={"w-full p-2 rounded-lg bg-white"} id={"email"} placeholder={"Email address..."}/>
					{/*{submitted && email.length === 0 && <span className={"text-red-500 text-sm"}>Email is required</span>}*/}
				</div>

				<div className={"flex justify-center items-center w-1/4 newsletter__form newsletter__form--submit"}>
					<button className={"w-full p-2 rounded-lg bg-energyYellow"}>Sign up</button>
				</div>
			</form>
		</div>
	)
}