import { SerializedStyles, css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';

const globalStyles: SerializedStyles = css({
	":root": {
		backgroundColor: "#001E26",
		color: "white",
	},
	"*": {
		boxSizing: "border-box",
		padding: 0,
		margin: 0,
		fontFamily: "'Playfair Display', sans-serif",
		letterSpacing: "0.25px",
		fontWeight: "normal",
	},
	"html, body, #__next": {
		minHeight: "100%",
		minWidth: "100%",
	},
	"h1, h2, h3, h4, h5, h6": {
		fontFamily: "'Fauna One', sans-serif", 
	},
	"span": {
		fontFamily: "inherit",
	}
});

function MyApp({ Component, pageProps }: AppProps) {
	
	return (
		<>
			<Global styles={globalStyles} />
			<Component {...pageProps} />
		</>
	);
	
}

export default MyApp;
