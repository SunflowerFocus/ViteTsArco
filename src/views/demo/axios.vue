<script setup lang='ts'>

import { getMenus, getGoods, getUsers } from "@/api/mock"

const menus = (params?: any) => {
    getMenus(params).then((res: any) => {
        console.log(res)
    })
}

const goods = () => {
    getGoods().then(res => {
        console.log(res)
    })
}

const users = () => {
    getUsers().then(res => {
        console.log(res)
    })
}

</script>

<template>
    <button @click="menus">获取菜单</button>
    <button @click="users">获取用户</button>
    <button @click="goods">获取商品</button>
</template>

<style scoped></style>