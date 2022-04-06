import styled, {css} from "styled-components";

export const H1Title = styled.h1`
	font-family: "Fira Sans", sans-serif !important;
	font-size: 4rem;
	display: block;
	font-weight: 700;
	margin: 0;

	${({ primaryColor }) => {
		if (primaryColor) {
			return css`
				color: #1d4ed8;
			`;
		}
	}}
`;

export const H2Title = styled.h2`
	font-family: "Fira Sans", sans-serif !important;
	font-size: 2.75rem;
	display: block;
	font-weight: 600;
	margin: 0;

	${({ primaryColor }) => {
		if (primaryColor) {
			return css`
				color: #1d4ed8;
			`;
		}
	}}
`;

export const H3Title = styled.h3`
	font-family: "Fira Sans", sans-serif !important;
	font-size: 2rem;
	display: block;
	font-weight: 600;
	margin: 0;

	${({ primaryColor }) => {
		if (primaryColor) {
			return css`
				color: #1d4ed8;
			`;
		}
	}}
`;

export const Paragraph = styled.p`
	font-family: "Fira Sans", sans-serif !important;
	font-size: 1rem;
	display: block;
	margin: 0;

	${({ primaryColor }) => {
		if (primaryColor) {
			return css`
				color: #1d4ed8;
			`;
		}
	}}
`;
