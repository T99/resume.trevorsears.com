/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:41 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import githubIcon from "../assets/icons/github.svg";
import mailIcon from "../assets/icons/mail.svg";
import mapPinIcon from "../assets/icons/map-pin.svg";
import phoneIcon from "../assets/icons/phone.svg";

export type ContactInformationObject = {
	name: string,
	icon: string,
	content: string,
	link: string,
};

export const CONTACT_INFORMATION: ContactInformationObject[] = [
	{
		name: "Mobile Phone Number",
		icon: phoneIcon,
		content: "(231) 499 - 8996",
		link: "tel:+1 (231) 499 - 8996",
	},
	{
		name: "Email Address",
		icon: mailIcon,
		content: "trevor@trevorsears.com",
		link: "mailto:trevor@trevorsears.com",
	},
	{
		name: "GitHub Account",
		icon: githubIcon,
		content: "github.com/T99",
		link: "https://github.com/T99",
	},
	{
		name: "Location",
		icon: mapPinIcon,
		content: "Traverse City, Michigan",
		link: "https://goo.gl/maps/u5sLKDSg5f3Z3fpf8",
	}
];
