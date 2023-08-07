import { Theme, css } from "@emotion/react";

const style = {
	navBar: () => () => css``,
	top: () => (theme: Theme) =>
		css`
			display: flex;
			justify-content: center;
			align-items: center;

			& > img {
				cursor: pointer;
				height: 9.75rem;
			}

			background-color: ${theme.primary};
		`,
	bottom: () => (theme: Theme) =>
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			padding: 1rem;
			background-color: ${theme.secondary};
		`,
};

export default style;
