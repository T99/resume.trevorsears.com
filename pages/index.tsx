import { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { css, SerializedStyles } from "@emotion/react";
import {
	PROFESSIONAL_HISTORY,
	ProfessionalHistoryObject
} from "../data/professional-history-object";
import { ProfessionalHistory } from "../components/professional-history";

const pageContainerStyles: SerializedStyles = css({
	height: "100%",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	padding: "2.5%",
});

const innerContainerStyles: SerializedStyles = css({
	width: "100%",
	maxWidth: "1000px",
	padding: "16px",
	borderRadius: "12px",
	backgroundColor: "#FFF3",
});

const nameHeaderStyles: SerializedStyles = css({
	fontSize: "4rem",
});

const sectionHeaderStyles: SerializedStyles = css({
	borderBottom: "2px solid white",
}); 

const professionalHistoryContainer: SerializedStyles = css({
	
});

const Home: NextPage = (): ReactElement => {
	
	const professionalHistory: ReactNode = PROFESSIONAL_HISTORY.map(
		(item: ProfessionalHistoryObject): ReactNode =>
			<ProfessionalHistory key={item.startDate} {...item} />
	);
	
	return (
		<div css={pageContainerStyles}>
			<Head>
				<title>Trevor Sears | Resume</title>
				<meta name="description"
					  content="An overview of my professional background,
					  experience, accomplishments, and outlook. This document
					  aims to detail anything that a potential employer might
					  need to know about me!"
				/>
			</Head>
			<div css={innerContainerStyles}>
				<h1 css={nameHeaderStyles}>Trevor Sears</h1>
				<h2 css={sectionHeaderStyles}>Professional History</h2>
				<div css={professionalHistoryContainer}>
					{professionalHistory}
				</div>
			</div>
			
		</div>
	);
	
}

export default Home;
