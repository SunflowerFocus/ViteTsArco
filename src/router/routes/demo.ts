import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layouts/demo/index.vue');

const routes: RouteRecordRaw = {
    path: '/demo',
    name: 'DEMO',
    component: LAYOUT,
    redirect: '/demo/index',
    meta: {
        title: 'Demo'
    },
    children: [
        {
            path: 'index',
            name: 'DEMO_INDEX',
            component: () => import('@/views/demo/index.vue'),
            meta: {
                title: 'DEMO_INDEX',
            },
        },
        {
            path: 'pinia',
            name: 'PINIA_INDEX',
            component: () => import('@/views/demo/pinia.vue'),
            meta: {
                title: 'PINIA_INDEX',
            },
        },
        {
            path: 'axios',
            name: 'AXIOS_INDEX',
            component: () => import('@/views/demo/axios.vue'),
            meta: {
                title: 'AXIOS_INDEX',
            },
        }
    ]
}

export default routes