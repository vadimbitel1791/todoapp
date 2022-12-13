import { createStore } from 'effector';
import { createPeopleEV, toggleCreatePeopleModalEV } from './events';

const initialState = {
    createModalVisible: false,
    list: [],
};

export const $peopleStore = createStore<any>(initialState);

$peopleStore
    .on(createPeopleEV, (state, payload) => ({
        ...state,
        list: [...state.list, payload],
        createModalVisible: false,
    }))
    .on(toggleCreatePeopleModalEV, (state, payload) => ({
        ...state,
        createModalVisible: payload,
    }));
