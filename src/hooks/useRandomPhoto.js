import axios from "axios";
import { useState, useCallback } from "react";

const useRandomPhoto = () => {
	const [photoList, setPhotoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchRandomPhotos = useCallback(async () => {
		setError(false);

		if (!photoList.length) {
			setIsLoading(true);
		}

		try {
			const url =
				"https://api.unsplash.com/photos/random?orientation=portrait&count=30";

			const response = await axios.get(url, {
				headers: { Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}` },
			});

			// Merge images with existing images
			setPhotoList((prevState) => [...prevState, ...(response?.data ?? [])]);
		} catch (error) {
			// Mimic an error event logging
			setError(!!error);
		}

		setIsLoading(false);

		return;
	}, []);

	return [photoList, isLoading, fetchRandomPhotos, error];
};

export default useRandomPhoto;
