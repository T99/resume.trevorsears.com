/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:29 PM -- August 16th, 2022
 * Project: resume.trevorsears.com
 */
import React, { FunctionComponent, ReactElement } from "react";
import { ProfessionalHistoryObject } from "../data/professional-history-object";
import { SerializedStyles, css } from "@emotion/react";

export type Props = Readonly<ProfessionalHistoryObject>;

const wrapBreak: string = "@media(max-width: 700px)";

const containerStyles: SerializedStyles = css({
    "& + &": {
        marginTop: "32px",
    }
});

const metaInfoStyles: SerializedStyles = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "8px",
    "& > * ": {
        display: "inline-block",
    },
    [wrapBreak]: {
        flexDirection: "column",
    }
});

const titleStyles: SerializedStyles = css({
    fontSize: "1.25rem",
    fontWeight: "bold",
});

const positionTitleStyles: SerializedStyles = css({
    fontSize: "1rem",
    fontWeight: "normal",
    whiteSpace: "nowrap",
});

const timespanStyles: SerializedStyles = css({
    fontSize: "1rem",
    textAlign: "right",
    [wrapBreak]: {
        marginTop: "4px",
    }
});

const descriptionStyles: SerializedStyles = css({
    color: "#D9E8F7",
    fontSize: "0.9rem",
    lineHeight: 1.6,
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
