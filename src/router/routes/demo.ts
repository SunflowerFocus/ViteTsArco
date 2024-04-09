import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/demo',
    name: 'demo',
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