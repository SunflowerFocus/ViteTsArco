<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUsersStore } from '@/store/index';
const store = useUsersStore();

// const name = ref<string>(store.name);
// const age = ref<number>(store.age);
// const sex = ref<string>(store.sex);

const { name, age, sex } = storeToRefs(store);

const changeName = () => {
  store.name = "小猪课堂";
};

</script>

<template>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="changeName">更改姓名</button>
</template>

<style scoped></style>