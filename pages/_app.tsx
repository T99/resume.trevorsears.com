import { SerializedStyles, css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

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
			<Script id="google-tag-manager" strategy="afterInteractive">
			{`
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-NZ9Q5RJ');
			`}
			</Script>
			<Global styles={globalStyles} />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
	
}

export default MyApp;
