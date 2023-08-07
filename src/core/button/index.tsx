import style from "./button.style";

interface ButtonProps {
	text: string;
	link?: string;
}

const Button = ({ text = "button", link = "" }: ButtonProps) => {
	return (
		<a href={link}>
			<button css={style.button}>{text}</button>
		</a>
	);
};

export default Button;
