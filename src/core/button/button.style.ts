import { Theme, css } from "@emotion/react";

const style = {
	button: () => (theme: Theme) =>
		css`
			background-color: ${theme.secondary};
			height: 5rem;
			width: clamp(16rem, 0rem + 40vw, 32rem);

			border: 1px solid transparent;
			//padding: 0.6em 1.2em;
			transition: border-color 0.25s;
			cursor: pointer;

			color: white;
			font-size: 1.5rem;
			&:hover {
				border-color: ${theme.primary};
			}

			&:focus,
			&:focus-visible {
				outline: 4px auto -webkit-focus-ring-color;
			}
		`,
};

export default style;
