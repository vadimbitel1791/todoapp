import { collection, getFirestore, addDoc, getDoc, getDocs } from 'firebase/firestore';
import { createEffect, sample } from 'effector';
import { Firebase } from '../..';
import { normalizeResponse } from '../../utils/normalizeResponse';
import { createEventEV, fetchEventsEV } from './events';

export const fetchEventsFX = createEffect<any>(async () => {
    try {
        const eventsResponse = await getDocs(collection(getFirestore(Firebase), 'events'));
        const events = eventsResponse.docs.map(normalizeResponse);

        return events;
    } catch (e) {
        console.log(e);
    }
});

export const createEventFX = createEffect<any>(async (values: any) => {
    try {
        const ref = collection(getFirestore(Firebase), 'events');
        const response = await addDoc(ref, values);
        const doc = await getDoc(response);

        const normalized = normalizeResponse(doc);

        return normalized;
    } catch (e) {
        console.log(e);
    }
});

sample({
    clock: createEventEV,
    target: createEventFX,
});

sample({
    clock: fetchEventsEV,
    target: fetchEventsFX,
});
