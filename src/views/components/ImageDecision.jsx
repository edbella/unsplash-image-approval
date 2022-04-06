import chunk from "lodash.chunk";
import get from "lodash.get";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import useAuthenticationContext from "../../context/Authentication";
import useRandomPhoto from "../../hooks/useRandomPhoto";
import useStorage from "../../hooks/useStorage";
import Button from "../../reusables/Button";
import ImageViewer from "../../reusables/Image";
import { Paragraph } from "../../reusables/Title";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg";

const ContentHolder = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
	background-color: white;
	width: 100%;
	max-width: 468px;
	padding-top: 16px;
	border-top: 1px solid #f3f4f6;
	min-height: 150px;
	margin: 8px auto;
`;

const ImageDecision = () => {
	const [photoList, isLoading, fetchPhotoList, error] = useRandomPhoto();
	const { updateImageCollection } = useAuthenticationContext();
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
	const { getFromStore, addToStore } = useStorage();

	const rejectedImages = getFromStore("rejectedImages") || [];

	// Get a clean list of random photos
	const cleanPhotoList = useMemo(() => {
		// If there are no current rejected images, return the original photo list
		if (!rejectedImages.length) {
			return photoList;
		}

		// Otherwise, filter out rejected images
		return photoList.filter((photo) => !rejectedImages.includes(photo?.id));
	}, [photoList, rejectedImages]);

	// Chunk the list of photos into chunks of 1
	const chunkedPhotoList = chunk(cleanPhotoList, 1);

	// Get the current photo
	const currentPhoto = chunkedPhotoList?.[currentPhotoIndex]?.[0];

	const imageUrl = get(currentPhoto, "urls.small", "");
	const altText = get(currentPhoto, "id", "");

	// Handle when photo is rejected
	const handleRejection = () => {
		rejectedImages.push(currentPhoto?.id);
		addToStore("rejectedImages", rejectedImages);

		setCurrentPhotoIndex((prevState) => prevState + 1);
	};

	// Handle when image is approved
	const handleApproval = () => {
		updateImageCollection(currentPhoto);
		setCurrentPhotoIndex((prevState) => prevState + 1);
	};

	// Fetch on mount
	useEffect(() => {
		fetchPhotoList();
	}, []);

	// Listen to changes on the current photo index
	useEffect(() => {
		// Refetch if getting near the end of the list
		if (currentPhotoIndex + 1 === cleanPhotoList.length - 5) {
			fetchPhotoList();
		}
	}, [currentPhotoIndex]);

	// Render when error occurs
	if (error) {
		return (
			<ContentHolder>
				<Paragraph className="text-xs text-center" style={{color: "red"}}>
					Error fetching images. Please try again.
				</Paragraph>
			</ContentHolder>
		);
	}

	return (
		<ContentHolder className="gap-4">
			{isLoading ? (
				<Paragraph className="animate-pulse text-xs text-center">
					Fetching Images. Please wait...
				</Paragraph>
			) : (
				<>
					<ImageViewer
						src={imageUrl}
						alt={altText}
						role="presentation"
						style={{
							maxHeight: 425,
							minHeight: 425,
							width: "100%",
							maxWidth: "100%",
						}}
					/>
					<div className="flex flex-row gap-6">
						<Button title="Accept Image" onClick={handleRejection} secondary>
							<CancelIcon />
						</Button>

						<Button title="Reject Image" onClick={handleApproval} primary>
							<CheckIcon />
						</Button>
					</div>
				</>
			)}
		</ContentHolder>
	);
};

export default ImageDecision;
