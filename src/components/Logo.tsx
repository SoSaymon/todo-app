interface LogoProps {
	color?: string,
	opacity?: number
}
export const Logo = ({color, opacity}: LogoProps) => {
	return (
		<span className={"font-bold text-2xl"} style={{color, opacity, fontFamily: 'Open Sans'}}>
					LOGO
		</span>
	)
}