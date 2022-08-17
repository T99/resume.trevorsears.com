/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:49 PM -- August 17th, 2022
 * Project: resume.trevorsears.com
 */

import React, { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import { ContactInformationObject } from "../data/contact-information-object";
import { css, SerializedStyles } from "@emotion/react";

export type Props = Readonly<ContactInformationObject>;

const containerStyles: SerializedStyles = css({
	padding: "6px 0",
});

const linkStyles: SerializedStyles = css({
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "baseline",
});

const iconStyles: SerializedStyles = css({
	color: "inherit",
});

const textStyles: SerializedStyles = css({
	
});

export const ContactInformation: FunctionComponent<Props> = (
	{ name, icon, content, link }: Props
): ReactElement => {
	
	return (
		<div css={containerStyles} title={name}>
			<a css={linkStyles} href={link} target="_blank" rel="noreferrer noopen">
				<Image src={icon} css={iconStyles} />
				<p css={textStyles}>{content}</p>
			</a>
		</div>
	);
	
};
