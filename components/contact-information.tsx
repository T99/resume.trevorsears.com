/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:49 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import { ContactInformationObject } from "../data/contact-information-object";
import { css, SerializedStyles } from "@emotion/react";

export type Props = Readonly<ContactInformationObject>;

const containerStyles: SerializedStyles = css({
	padding: "6px 0",
	"svg": {
		flex: "0 0 auto",
		height: "1.25rem",
		marginRight: "8px",
		transitionProperty: "color, transform",
		transitionDuration: "250ms",
		transitionTimingFunction: "linear",
		willChange: "transform",
	}
});

const linkStyles: SerializedStyles = css({
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	color: "inherit",
	textDecoration: "none",
	"&:hover": {
		"svg": {
			color: "orange",
			transform: "scale(1.1)",
		},
	},
});

const textStyles: SerializedStyles = css({
	fontSize: "0.9rem",
	letterSpacing: "0.7px",
	fontFamily: "'Fauna One', sans-serif",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
});

export const ContactInformation: FunctionComponent<Props> = (
	{ name, icon, content, link }: Props
): ReactElement => {
	
	return (
		<div css={containerStyles} title={name}>
			<a css={linkStyles} href={link} target="_blank" rel="noopener noreferrer">
				{(icon as unknown as () => ReactNode)()}
				<p css={textStyles}>{content}</p>
			</a>
		</div>
	);
	
};
