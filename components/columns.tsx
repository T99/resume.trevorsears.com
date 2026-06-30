/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:17 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import type { FunctionComponent, ReactNode } from "react";

export type Props = Readonly<{ 
	children: ReactNode,
}>;

export const Columns: FunctionComponent<Props> = (
	{ children }: Props
): ReactNode => (
	<div className="w-full flex flex-row flex-wrap *:flex-1">
		{children}
	</div>
);
