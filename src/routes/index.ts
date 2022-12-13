import { Groups } from './../pages/groups/Groups';
import { Events } from '../pages/events/Events';
import { People } from '../pages/people/People';

export const routes = [
    {
        path: '/',
        component: Events,
    },
    {
        path: '/people',
        component: People,
    },
    {
        path: '/groups',
        component: Groups,
    },
];
