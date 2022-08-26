/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:55 PM -- August 16th, 2022
 * Project: resume.trevorsears.com
 */

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	
	public render(): JSX.Element {
		
		return (
			<Html lang="en">
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Fauna+One&family=Playfair+Display:wght@400;700&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* Google Tag Manager (noscript) */}
					<noscript dangerouslySetInnerHTML={{__html: `
						<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZ9Q5RJ"
								height="0"
								width="0"
								style="display:none;visibility:hidden"></iframe>
					`}}></noscript>
					{/* End Google Tag Manager (noscript) */}
				</body>
			</Html>
		);
		
	}
}
