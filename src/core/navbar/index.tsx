import style from "./navbar.style";
import figuya_logo from "../../assets/figuya_logo.svg";

const Navbar = () => {
	return (
		<div css={style.navBar}>
			<div css={style.top}>
				<img color="white" height="80px" alt="" src={figuya_logo}></img>
			</div>
			<div css={style.bottom}>
				{" "}
				{`Sklep od kolekcjonerów dla kolekcjonerów`}
			</div>
		</div>
	);
};

export default Navbar;
