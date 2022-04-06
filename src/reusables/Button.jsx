import styled, { css } from "styled-components";

const Button = styled.button`
	border-radius: 40px;
	min-width: 150px;
	padding: 0.5rem 1rem;
	color: white;
	font-family: "Fira Sans", sans-serif !important;
	text-align: center;
	font-size: 1.2rem;
	transition: all 0.2s ease-in-out;
	background-color: transparent;

	& svg {
		display: -webkit-box;
	}

	${({ primary = false, secondary = false }) => {
		if (primary) {
			return css`
				background-color: #4338ca;
				&:hover {
					background-color: #3730a3;
				}
			`;
		}

		if (secondary) {
			return css`
				background-color: #475569;

				&:hover {
					background-color: #334155;
				}
			`;
		}
	}}
`;

export default Button;
