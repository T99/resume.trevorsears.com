/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:49 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import type { FunctionComponent, ReactNode } from "react";
import type { ContactInformationObject } from "../data/contact-information-object";

export type Props = Readonly<ContactInformationObject>;

export const ContactInformation: FunctionComponent<Props> = ({
	name,
	icon,
	content,
	link,
}: Props): ReactNode => (
	<div className="py-1.5" title={name}>
		<a className="flex justify-start items-center text-inherit no-underline hover:[&_div]:text-orange-300 hover:[&_div]:scale-110" href={link} target="_blank" rel="noopener noreferrer">
			<div className="h-5 mr-2 transition duration-250 ease-linear will-change-transform print:text-black *:h-full">
				{(icon as unknown as () => ReactNode)()}
			</div>
			<p className="text-sm tracking-tight font-(family-name:--font-header) truncate">{content}</p>
		</a>
	</div>
);
