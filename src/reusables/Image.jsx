import styled from "styled-components";

const ImageViewer = styled.img`
	object-fit: cover;
	object-position: center;
	min-width: 130px;
	min-height: 70px;
	max-width: 130px;
	max-height: 70px;
	border-radius: 8px;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	display: inline-block;

	&:hover {
		border-color: #f3f4f6;
	}
`;

export const ImageViewerBackdrop = styled.div`
	position: relative;
	overflow: hidden;
	width: fit-content;

	&::before {
		content: "";
		transition: all 0.3s ease-in-out;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	&:hover {
		&::before {
			background-color: rgba(0, 0, 0, 0);
		}
	}
`;

export default ImageViewer;
