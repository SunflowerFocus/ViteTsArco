import {RouteRecordRaw} from "vue-router";

const modules: Record<string, any> = import.meta.glob('./routes/*.ts', {eager: true});

const routeModuleList: RouteRecordRaw[] = [];

Object.values(modules).forEach(value => {
    routeModuleList.push(...[value.default || {}]);
})

export default routeModuleList