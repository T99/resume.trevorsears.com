/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:18 PM -- August 16th, 2022
 * Project: resume.trevorsears.com
 */

export type ProfessionalHistoryObject = {
	companyName: string,
	positionTitle: string,
	startDate: string,
	endDate: string,
	description: string,
};

export const PROFESSIONAL_HISTORY: ProfessionalHistoryObject[] = [
	{
		companyName: "Ampel Feedback",
		positionTitle: "Front-end Developer & Designer",
		startDate: "September 2018",
		endDate: "March 2020",
		description: "Developed a scratch-built front-end SPA framework for " +
			"building highly dynamic and interactive web apps that was used " +
			"as the engine of Ampel Feedback’s flagship customer feedback " +
			"kiosk. Highly independent workflow, operating remotely to " +
			"Traverse City while living in Houghton, MI."
	},
	{
		companyName: "Knorr Marketing",
		positionTitle: "Full Stack Developer",
		startDate: "March 2021",
		endDate: "Present",
		description: "Worked to maintain and improve a proprietary PHP-based " +
			"CMS that specialized in the area of furniture eCommerce " +
			"websites for a host of international clients. Operated as a " +
			"member of a small team responsible for backing 40+ sites, as " +
			"well as a database catalogue of hundreds of thousands of " +
			"products, associated product information, and eCommerce data."
		
	},
];
