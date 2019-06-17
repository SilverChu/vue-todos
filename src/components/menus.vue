<template>
  <!-- 菜单容器 -->
  <div class="list-todos">
    <!-- 单个菜单容器 -->
    <a
      @click="goList(item.id)"
      class="list-todo list activeListClass"
      :class="{ 'active': item.id === todoId }"
      v-for="item in items"
      :key="item"
    >
      <span class="icon-lock" v-if="item.locked"></span>
      <span class="count-list" v-if="item.count > 0">{{ item.count }}</span>
      {{ item.title }}
    </a>
    <!-- 新增菜单 -->
    <a class="link-list-new">
      <span class="icon-plus"></span>
      新增
    </a>
  </div>
</template>

<script>
import {getTodoList, addTodo } from '../api/api';

export default {
  data() {
    return {
      items: [],
      todoId: ''
    };
  },
  created() {
    getTodoList({}).then(res => {
      const TODOS = res.data.todos;
    })
  }
};
</script>

<style lang="less">
@import "../common/style/menu.less";
</style>
