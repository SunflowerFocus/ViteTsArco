import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layouts/arco/index.vue');

const routes: RouteRecordRaw = {
    path: '/arco',
    name: 'arco',
    component: LAYOUT,
    redirect: '/arco/index',
    meta: {
        title: 'Arco',
    },
    children: [
        {
            path: 'index',
            name: 'Arco',
            component: () => import('@/views/arco/index.vue'),
            meta: {
                title: 'Arco',
            },
        },
    ]
}

export default routes