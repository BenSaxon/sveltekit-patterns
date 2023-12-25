import { Timestamp } from 'firebase/firestore';

export const createTimestamp = (date?: Date) => {
	return Timestamp.fromDate(date ? date : new Date());
};
