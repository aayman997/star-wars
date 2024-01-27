const isValidUrl = (str: string): boolean => {
	try {
		return Boolean(new URL(str).protocol);
	} catch (_) {
		return false;
	}
};
export default isValidUrl;
