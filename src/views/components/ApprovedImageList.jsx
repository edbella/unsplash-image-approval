import get from "lodash.get";
import { useState, useEffect, useRef } from "react";
import Flickity from "react-flickity-component";
import useAuthenticationContext from "../../context/Authentication";
import IconButton from "../../reusables/IconButton";
import ImageViewer, { ImageViewerBackdrop } from "../../reusables/Image";
import ImageDecision from "./ImageDecision";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

const ApprovedImageList = () => {
	const [showImageDecider, toggleImageDecider] = useState(false);
	const { approvedImages } = useAuthenticationContext();
	const flickityRef = useRef(null);

	useEffect(() => {
		// Show image decider if there are images on mount
		if (approvedImages?.length) {
			toggleImageDecider(true);
		}
	}, []);

	return (
		<div className="space-y-4" style={{ overflow: "hidden" }}>
			{approvedImages?.length ? (
				<Flickity
					options={{
						freeScroll: true,
						contain: true,
						resize: true,
						groupCells: true,
						pageDots: false,
						prevNextButtons: true,
						cellAlign: "left",
					}}
					flickityRef={(ref) => {
						flickityRef.current = ref;
					}}
					reloadOnUpdate
				>
					{approvedImages.map((image) => {
						const imageUrl = get(image, "urls.thumb", "");
						const altText = get(image, "id", "");

						return (
							<ImageViewerBackdrop key={altText} style={{ marginRight: 8 }}>
								<CheckIcon
									style={{
										position: "absolute",
										right: 5,
										top: 5,
										color: "white",
										zIndex: 1,
									}}
								/>
								<ImageViewer
									src={imageUrl}
									alt={altText}
									style={{ width: "100%" }}
									backdrop
								/>
							</ImageViewerBackdrop>
						);
					})}
				</Flickity>
			) : (
				<IconButton
					title="Add new image"
					onClick={() => !showImageDecider && toggleImageDecider(true)}
				>
					+
				</IconButton>
			)}

			{showImageDecider && <ImageDecision />}
		</div>
	);
};

export default ApprovedImageList;
