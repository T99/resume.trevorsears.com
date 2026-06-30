/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:50 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import type { FunctionComponent, ReactNode } from "react";
import type { AchievementsAndSkillsObject } from "@/data/achievements-and-skills-object";

export type Props = Readonly<{
	achievements: AchievementsAndSkillsObject[],
}>;

export const Achievements: FunctionComponent<Props> = (
	{ achievements }: Props,
): ReactNode => {
	
	const items: ReactNode = achievements.map(
		({ name }: AchievementsAndSkillsObject) => (
			<div key={name} className="not-print:min-w-12 py-2 px-4 my-2 mx-4 rounded-lg bg-[#FFF1] print:p-0 print:mx-6">
				<p className="text-center font-(family-name:--font-header)">{name}</p>
			</div>
		)
	);
	
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-full flex flex-row flex-wrap justify-center items-start print:justify-start">
				{items}
			</div>
		</div>
	);
	
};
