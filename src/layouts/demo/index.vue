<script setup lang="ts">
import { RouteRecordRaw, useRouter } from 'vue-router';

const router: RouteRecordRaw[] = useRouter().getRoutes().filter(
    route => route.meta && route.meta.title && route.path.includes('demo/')
);

</script>

<template>
    <div>
        <router-link v-for="(route, index) in router" :key="index" :to="route.path">
            {{ route?.meta?.title }}
            <span v-if="index !== router.length - 1"> | </span>
        </router-link>
    </div>
    <hr>
    <router-view name="default"></router-view>
</template>

<style scoped></style>