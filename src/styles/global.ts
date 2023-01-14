import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	html, body, #__next {
		height: 100%;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

`;

export { GlobalStyles };
