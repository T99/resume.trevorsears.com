/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:55 PM -- August 16th, 2022
 * Project: resume.trevorsears.com
 */

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	
	public render(): JSX.Element {
		
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@400;700&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
		
	}
}
