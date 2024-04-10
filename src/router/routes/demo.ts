import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layouts/demo/index.vue');

const routes: RouteRecordRaw = {
    path: '/demo',
    name: 'demo',
    component: LAYOUT,
    redirect: '/demo/index',
    meta: {
        title: 'Demo'
    },
    children: [
        {
            path: 'index',
            name: 'DEMO',
            component: () => import('@/views/demo/index.vue'),
            meta: {
                title: 'DEMO',
            },
        },
    ]
}

export default routes