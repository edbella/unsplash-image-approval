import { createContext, useContext, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import { Paragraph } from "../reusables/Title";

export const AuthenticationContext = createContext(null);

export const AuthenticationProvider = ({ children }) => {
	const [approvedImages, setApprovedImages] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { getFromStore, addToStore } = useStorage();

	// Get approved images from storage
	const checkExistingImages = () => {
		const existingImages = getFromStore("approvedImages");

		// If user already has existing images then set them to state
		if (!!existingImages?.length) {
			setApprovedImages(existingImages);
		}

		setLoading(false);
	};

	// Update image collection
	const updateImageCollection = (image) => {
		const storePayload = [...approvedImages, image];

		// Update images to storage
		addToStore("approvedImages", storePayload);

		// Set to current state
		setApprovedImages(storePayload);
	};

	// Check existing images on mount
	useEffect(() => {
		checkExistingImages();
	}, []);

	return (
		<AuthenticationContext.Provider
			value={{ approvedImages, updateImageCollection }}
		>
			{isLoading ? (
				<Paragraph style={{ textAlign: "center" }}>Please wait</Paragraph>
			) : (
				<>{children}</>
			)}
		</AuthenticationContext.Provider>
	);
};

// Export default hook
const useAuthenticationContext = () => useContext(AuthenticationContext);

export default useAuthenticationContext;
