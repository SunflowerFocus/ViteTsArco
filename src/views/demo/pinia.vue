<script setup lang="ts">
import child from './component/pinia.vue';
import { useUsersStore } from '@/store/index';
import { storeToRefs } from "pinia";
const store = useUsersStore();
const { name, age, sex } = storeToRefs(store);

const changeName = () => {
    store.name = "张三";
};

const reset = () => {
    store.$reset();
};

const patchStore = () => {
    store.$patch({
        name: "张三",
        age: 100,
        sex: "女",
    });
};

const saveName = () => {
    store.saveName("我是小猪");
};

</script>

<template>

    <div>父组件</div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>性别：{{ sex }}</p>
    <p>新年龄：{{ store.getAddAge(100) }}</p>

    <p>调用其它getter: {{ store.getNameAndAge }}</p>

    <button @click="changeName">更改姓名</button>

    <button @click="reset">重置 store</button>

    <button @click="patchStore">批量修改数据</button>

    <button @click="saveName">调用 aciton</button>

    <div>子组件</div>

    <child></child>

</template>

<style scoped></style>