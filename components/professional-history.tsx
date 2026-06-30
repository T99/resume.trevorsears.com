/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:29 PM -- August 16th, 2022
 * Project: resume.trevorsears.com
 */
import type { FunctionComponent, ReactNode } from "react";
import type { ProfessionalHistoryObject } from "@/data/professional-history-object";

export type Props = Readonly<ProfessionalHistoryObject>;

export const ProfessionalHistory: FunctionComponent<Props> = ({
    companyName,
    positionTitle,
    startDate,
    endDate,
    description,
}: Props): ReactNode => (
    <div className="m-1 not-first:mt-4">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
            <h3 className="mr-5 text-xl font-bold">
                {companyName}, <span className="text-base font-normal md:whitespace-nowrap">{positionTitle}</span>
            </h3>
            <h3 className="font-normal md:mt-1 md:text-right md:whitespace-nowrap">{startDate} - {endDate}</h3>
        </div>
        <p className="text-[#D9E8F7] text-sm leading-[1.6] text-justify=">{description}</p>
    </div>
);
