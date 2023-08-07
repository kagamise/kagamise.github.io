import { css } from "@emotion/react";

const style = {
	home: () => () =>
		css`
			height: clamp(24rem, 0rem + 58vh, 36rem);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
		`,
};

export default style;
