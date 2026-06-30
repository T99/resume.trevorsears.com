/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:57 PM -- June 29th, 2026
 * Project: resume.trevorsears.com
 */

import "./globals.css";
import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Fauna_One, Playfair_Display } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const playfairDisplay = Playfair_Display({
	variable: "--font-standard",
	subsets: ["latin"],
	weight: ["400", "700"],
});


const faunaOne = Fauna_One({
	variable: "--font-header",
	subsets: ["latin"],
	weight: "400",
});

const RootLayout: FunctionComponent<Readonly<PropsWithChildren>> = ({
	children,
}: Readonly<PropsWithChildren>): ReactNode => (
	<html lang="en"
	      className={`${playfairDisplay.variable} ${faunaOne.variable} h-full antialiased`}>
		<GoogleTagManager gtmId="GTM-NZ9Q5RJ" />
		<body className="min-h-full">
			{children}
		</body>
	</html>
);

export default RootLayout;
