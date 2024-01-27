const dateFormatter = (date: Date): string => {
	const parsedDate = new Date(date);

	const day = `0${parsedDate.getDate()}`.slice(-2);
	const month = `0${parsedDate.getMonth() + 1}`.slice(-2);
	const year = parsedDate.getFullYear();

	return `${day}-${month}-${year}`;
};
export default dateFormatter;
