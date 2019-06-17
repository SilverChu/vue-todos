<template>
  <!-- 最外层容器 -->
  <section class="container">
    <!-- 左侧容器 -->
    <section class="menu">
      <section class="menu">
        <menus></menus>
      </section>
    </section>
    <!-- 右侧容器 -->
    <section class="content-container">
      <todo></todo>
    </section>
  </section>
</template>

<script>
import menus from './menus'
import todo from './todo'

export default {
  components: {
    menus,
    todo
  }
}
</script>

<style lang="less">
@import "../common/style/layouts.less";
</style>
