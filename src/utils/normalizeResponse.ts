import { DocumentData } from 'firebase/firestore';

export const normalizeResponse = (doc: DocumentData) => ({ ...doc.data(), id: doc.id });
