import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

import routeModuleList from './route';

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routeModuleList as unknown as RouteRecordRaw[],
    strict: true,
})

router.beforeEach((to, _, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
    next()
})

export default router