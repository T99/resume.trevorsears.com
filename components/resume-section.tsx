/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:11 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import type { FunctionComponent, ReactNode } from "react";

export type Props = Readonly<{ 
	title?: string,
	children: ReactNode,
}>;

export const ResumeSection: FunctionComponent<Props> = ({
	title,
	children,
}: Props): ReactNode => (
	<div className="w-full p-2">
		{title ? <h3 className="mx-2 py-2.5 px-2 font-bold text-3xl print:border-b-2 print:border-b-black">{title}</h3> : null}
		<div className="p-4 rounded-xl bg-[#FFF3]">
			{children}
		</div>
	</div>
);
