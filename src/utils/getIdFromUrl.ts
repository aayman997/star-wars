function getIdFromUrl(url: string, resource: string): string | null {
	const regex = new RegExp(`/${resource}/(\\d+)/`);

	const match = RegExp(regex).exec(url);
	return match ? match[1] : null;
}

export default getIdFromUrl;
