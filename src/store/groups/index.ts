import { createStore } from 'effector';
import { createGroupEV, toggleCreateGroupModalEV } from './events';

const initialState = {
    createModalVisible: false,
    list: [],
};

export const $groupStore = createStore<any>(initialState);

$groupStore
    .on(createGroupEV, (state, payload) => ({
        ...state,
        list: [...state.list, payload],
        createModalVisible: false,
    }))
    .on(toggleCreateGroupModalEV, (state, payload) => ({
        ...state,
        createModalVisible: payload,
    }));
