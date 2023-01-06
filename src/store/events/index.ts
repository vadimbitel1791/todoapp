import { createStore } from 'effector';
import { createEventFX, fetchEventsFX } from './effects';
import { toggleCreateEventModal } from './events';

const initialState = {
    createModalVisible: false,
    list: [],
};

export const $eventsStore = createStore<any>(initialState);

$eventsStore
    .on(toggleCreateEventModal, (state, payload) => ({
        ...state,
        createModalVisible: payload,
    }))
    .on(fetchEventsFX.doneData, (state, payload) => ({
        ...state,
        list: payload,
    }))
    .on(createEventFX.doneData, (state, payload) => ({
        ...state,
        list: [...state.list, payload],
        createModalVisible: false,
    }));
