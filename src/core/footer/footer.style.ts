import { Theme, css } from "@emotion/react";

const style = {
	footer: () => (theme: Theme) =>
		css`
			position: fixed;
			bottom: 0;
			width: 100%;

			display: flex;
			flex-direction: column;
			justify-content: center;

			align-items: center;
			text-align: center;
			padding: 1rem;
			background-color: ${theme.primary};
		`,
};

export default style;
