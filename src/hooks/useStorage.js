const useStorage = () => {
	// Add value to storage
	const addToStore = (key, value) =>
		localStorage.setItem(key, JSON.stringify(value));

	// Remove value from storage
	const removeFromStore = (key) => localStorage.removeItem(key);

	// Clear the storage
	const clearStore = () => localStorage.clear();

	// Get value from storage
	const getFromStore = (key) => JSON.parse(localStorage.getItem(key));

	return { addToStore, getFromStore, clearStore, removeFromStore };
};

export default useStorage;
