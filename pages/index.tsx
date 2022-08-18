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
				<title>Trevor Sears | Resume</title>
				<meta name="description"
					  content="An overview of my professional background,
					  experience, accomplishments, and outlook. This document
					  aims to detail anything that a potential employer might
					  need to know about me!"
				/>
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
				
				<ResumeSection title="Programming Languages">
					<Achievements achievements={PROGRAMMING_LANGUAGES} />
				</ResumeSection>
				
				<ResumeSection title="Technologies">
					<Achievements achievements={PROGRAMMING_FRAMEWORKS_AND_TECHNOLOGIES} />
				</ResumeSection>
				
			</div>
			
		</div>
	);
	
}

export default Home;
