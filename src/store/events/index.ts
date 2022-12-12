import { createStore } from 'effector';
import { createEventEV, toggleCreateEventModal } from './events';

const initialState = {
    createModalVisible: false,
    list: [],
};

export const $eventsStore = createStore<any>(initialState);

$eventsStore
    .on(createEventEV, (state, payload) => ({
        ...state,
        list: [...state.list, payload],
        createModalVisible: false,
    }))
    .on(toggleCreateEventModal, (state, payload) => ({
        ...state,
        createModalVisible: payload,
    }));
