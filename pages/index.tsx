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
import {
	CONTACT_INFORMATION,
	ContactInformationObject, FIND_ME_ONLINE
} from "../data/contact-information-object";
import { ContactInformation } from "../components/contact-information";
import { ResumeSection } from "../components/resume-section";
import { Columns } from "../components/columns";
import { Achievements } from "../components/achievements";
import {
	PROGRAMMING_FRAMEWORKS_AND_TECHNOLOGIES,
	PROGRAMMING_LANGUAGES
} from "../data/achievements-and-skills-object";

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
	"& > div > div > h3": {
		"@media(min-width: 500px)": {
			whiteSpace: "nowrap",
		}
	}
});

const nameHeaderStyles: SerializedStyles = css({
	fontSize: "4rem",
	lineHeight: 1.1,
	padding: "0.5rem",
	textAlign: "center",
});

const footerTextStyles: SerializedStyles = css({
	opacity: 0.5,
	marginTop: "calc(2.5vh - 10px)",
	fontSize: "0.9em",
	"a": {
		color: "inherit",
	},
});

const metaTitle: string = "Trevor Sears | Resume";
const metaDescription: string = "An overview of my professional background, " +
	"experience, accomplishments, and outlook. This document aims to detail " +
	"anything that a potential employer might need to know about me!";

const Home: NextPage = (): ReactElement => {
	
	const contactInformation: ReactNode = CONTACT_INFORMATION.map(
		(item: ContactInformationObject): ReactNode =>
			<ContactInformation key={item.name} {...item} />
	);
	
	const findMeOnline: ReactNode = FIND_ME_ONLINE.map(
		(item: ContactInformationObject): ReactNode =>
			<ContactInformation key={item.name} {...item} />
	);
	
	const professionalHistory: ReactNode = PROFESSIONAL_HISTORY.map(
		(item: ProfessionalHistoryObject): ReactNode =>
			<ProfessionalHistory key={item.startDate} {...item} />
	);
	
	return (
		<div css={pageContainerStyles}>
			
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription}/>
				<meta property="og:title" content={metaTitle} />
				<meta property="og:description" content={metaDescription} />
				<meta property="og:type" content="profile" />
				<meta property="og:url"
					  content="https://resume.trevorsears.com/" />
				<meta property="og:image"
					  content="https://resume.trevorsears.com/headshot.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="961" />
				<meta property="og:image:height" content="961" />
				<meta property="og:image:alt"
					  content="A headshot image of Trevor Sears." />
				<meta property="profile:first_name" content="Trevor" />
				<meta property="profile:last_name" content="Sears" />
				<meta property="profile:gender" content="male" />
			</Head>
			
			<div css={innerContainerStyles}>
				
				<ResumeSection>
					<h1 css={nameHeaderStyles}>Trevor Sears</h1>
				</ResumeSection>
				
				<Columns>
					
					<ResumeSection title="Contact Information">
						{contactInformation}
					</ResumeSection>
					
					<ResumeSection title="Find Me Online">
						{findMeOnline}
					</ResumeSection>
				
				</Columns>
				
				<ResumeSection title="Professional History">
					{professionalHistory}
				</ResumeSection>
				
				<ResumeSection title="Programming & Scripting Languages">
					<Achievements achievements={PROGRAMMING_LANGUAGES} />
				</ResumeSection>
				
				<ResumeSection title="Technologies">
					<Achievements achievements={PROGRAMMING_FRAMEWORKS_AND_TECHNOLOGIES} />
				</ResumeSection>
				
			</div>
			
			<p css={footerTextStyles}>
				Build with{" "}
				<a href="https://react.dev/"
				   target="_blank"
				   rel="noreferrer">React</a>{" "}
				and{" "}
				<a href="https://nextjs.org/"
				   target="_blank"
				   rel="noreferrer">NextJS</a>,{" "}
				hosted on{" "}
				<a href="https://vercel.com/home"
				   target="_blank"
				   rel="noreferrer">{"\u25B2"}Vercel</a>.
			</p>
			
		</div>
	);
	
}

export default Home;
