import styled, { css } from "styled-components";

const IconButton = styled.button`
	border-radius: 8px;
	min-width: 150px;
	padding: 0.5rem 1rem;
	font-family: "Fira Sans", sans-serif !important;
	text-align: center;
	min-height: 80px;
	background-color: #f1f5f9;
	color: #94a3b8;
	font-size: 2.5rem;
	line-height: 1;
	font-weight: 400;
	border: 1px solid transparent;
	text-align: center;

	&:hover {
		border-color: #cbd5e1;
	}
`;

export default IconButton;
