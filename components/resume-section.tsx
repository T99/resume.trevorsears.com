/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:11 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import { ProfessionalHistoryObject } from "../data/professional-history-object";
import { css, SerializedStyles } from "@emotion/react";
import React, { FunctionComponent, ReactElement, ReactNode } from "react";

export type Props = Readonly<{ 
	title?: string,
	children: ReactNode,
}>;

const outerContainerStyles: SerializedStyles = css({
	width: "100%",
	padding: "7px",
});

const sectionTitleStyles: SerializedStyles = css({
	padding: "10px 16px",
	fontWeight: "bold",
	fontSize: "1.75rem",
	whiteSpace: "nowrap",
	lineHeight: 1,
});

const innerContainerStyles: SerializedStyles = css({
	padding: "16px",
	borderRadius: "12px",
	backgroundColor: "#FFF3",
});

export const ResumeSection: FunctionComponent<Props> = (
	{ title, children }: Props
): ReactElement => {
	
	return (
		<div css={outerContainerStyles}>
			<h3 css={sectionTitleStyles}>{title ?? ""}</h3>
			<div css={innerContainerStyles}>
				{children}
			</div>
		</div>
	);
	
};
