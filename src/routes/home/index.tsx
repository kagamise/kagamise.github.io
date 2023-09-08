import Button from "../../core/button";
import style from "./home.style";

const Home = () => {
	return (
		<div css={style.home}>
			<Button
				text="Sprzedaż OLX"
				link="https://www.olx.pl/oferty/uzytkownik/1GhPHG/"
			/>
			<Button
				text="Sprzedaż Allegro (na życzenie)"
				link="https://allegro.pl/uzytkownik/figuyaonrine"
			/>
			<Button
				text="Instagram"
				link="https://www.instagram.com/figuyaonrine/"
			/>
			<Button
				text="Facebook"
				link="https://www.facebook.com/profile.php?id=100092703542534"
			/>
			<Button
				text="Discord"
				link="https://discord.gg/7dUGbxvsSv"
			/>
		</div>
	);
};

export default Home;
