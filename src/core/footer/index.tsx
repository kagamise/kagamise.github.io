import style from "./footer.style";

const Footer = () => {
	return (
		<div css={style.footer}>
			<span>{`Praca nad sklepem internetowym trwa.`}</span>
			<span>{`Sklep będzie funkcjonować pod tym adresem internetowym wkrótce.`}</span>
		</div>
	);
};

export default Footer;
