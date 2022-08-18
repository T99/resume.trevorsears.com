/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:50 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import { ProfessionalHistoryObject } from "../data/professional-history-object";
import { css, SerializedStyles } from "@emotion/react";
import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import {
	AchievementsAndSkillsObject
} from "../data/achievements-and-skills-object";

export type Props = Readonly<{
	achievements: AchievementsAndSkillsObject[],
}>;

const wrapBreak: string = "@media(max-width: 700px)";

const outerContainerStyles: SerializedStyles = css({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});

const innerContainerStyles: SerializedStyles = css({
	width: "100%",
	// maxWidth: "650px",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "flex-start",
});  

const achievementContainerStyles: SerializedStyles = css({
	minWidth: "50px",
	padding: "8px 16px",
	borderRadius: "6px",
	margin: "8px 16px",
	backgroundColor: "#FFF1",
});

const achievementTextStyles: SerializedStyles = css({
	textAlign: "center",
	fontFamily: "'Fauna One', sans-serif",
});

export const Achievements: FunctionComponent<Props> = (
	{ achievements }: Props,
): ReactElement => {
	
	const items: ReactNode = achievements.map(
		({ name }: AchievementsAndSkillsObject) => (
			<div key={name} css={achievementContainerStyles}>
				<p css={achievementTextStyles}>{name}</p>
			</div>
		)
	);
	
	return (
		<div css={outerContainerStyles}>
			<div css={innerContainerStyles}>
				{items}
			</div>
		</div>
	);
	
};
