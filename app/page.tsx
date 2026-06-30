import type { Metadata } from 'next';
/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:43 PM -- June 29th, 2026
 * Project: resume.trevorsears.com
 */

import type { FunctionComponent, ReactNode } from "react";
import { CONTACT_INFORMATION, type ContactInformationObject, FIND_ME_ONLINE } from "@/data/contact-information-object";
import { PROFESSIONAL_HISTORY, type ProfessionalHistoryObject } from "@/data/professional-history-object";
import { PROGRAMMING_FRAMEWORKS_AND_TECHNOLOGIES, PROGRAMMING_LANGUAGES } from "@/data/achievements-and-skills-object";
import { ContactInformation } from "@/components/contact-information";
import { ProfessionalHistory } from "@/components/professional-history";
import { ResumeSection } from "@/components/resume-section";
import { Columns } from "@/components/columns";
import { Achievements } from "@/components/achievements";

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

const Home: FunctionComponent = (): ReactNode => (
	<div className="h-full w-full flex flex-col justify-start items-center p-8">
		<div className="w-full max-w-250">
			<ResumeSection>
				<h1 className="text-6xl leading-[1.1] p-2 text-center">Trevor Sears</h1>
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

export default Home;

const title: string = "Trevor Sears | Resume";
const description: string = "An overview of my professional background, experience, accomplishments, and outlook.";

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		type: "profile",
		url: "https://resume.trevorsears.com/",
		images: [{
			url: "https://resume.trevorsears.com/headshot.jpg",
			width: 961,
			height: 961,
			alt: "A headshot image of Trevor Sears.",
		}]
	}
};
