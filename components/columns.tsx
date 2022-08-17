import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";

export type Props = Readonly<{ 
	children: ReactNode,
}>;

const containerStyles: SerializedStyles = css({
	width: "100%",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	"& > *": {
		flex: "1",
	}
});

export const Columns: FunctionComponent<Props> = (
	{ children }: Props
): ReactElement => {
	
	return (
		<div css={containerStyles}>
			{children}
		</div>
	);
	
};
