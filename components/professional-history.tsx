/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:29 PM -- August 16th, 2022
 * Project: resume.trevorsears.com
 */
import React, { FunctionComponent, ReactElement } from "react";
import { ProfessionalHistoryObject } from "../data/professional-history-object";
import { SerializedStyles, css } from "@emotion/react";

export type Props = Readonly<ProfessionalHistoryObject>;

const containerStyles: SerializedStyles = css({
    padding: "6px 0",
});

const metaInfoStyles: SerializedStyles = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    "& > * ": {
        display: "inline-block",
    }
});

const titleStyles: SerializedStyles = css({
    fontSize: "1.1rem",
    fontWeight: "bold",
});

const positionTitleStyles: SerializedStyles = css({
    fontSize: "1rem",
    fontWeight: "normal",
});

const timespanStyles: SerializedStyles = css({
    fontSize: "1rem",
});

const descriptionStyles: SerializedStyles = css({
    
});

export const ProfessionalHistory: FunctionComponent<Props> = (
    { companyName, positionTitle, startDate, endDate, description }: Props
): ReactElement => {
  
    return (
        <div css={containerStyles}>
            <div css={metaInfoStyles}>
                <h3 css={titleStyles}>{companyName}, <span css={positionTitleStyles}>{positionTitle}</span></h3>
                <h3 css={timespanStyles}>{startDate} - {endDate}</h3>
            </div>
            <p css={descriptionStyles}>{description}</p>
        </div>
    );
    
};
