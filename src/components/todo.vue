<template>
  <!-- 最外层容器 -->
  <div class="page lists-show">
    <!-- 容器上半部分 -->
    <nav>
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered"></span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{ todo.title }}</span>
        <span class="count-list">{{ todo.count }}</span>
      </h1>
      <div class="nav-group right">
        <div class="options-web">
          <a class="nav-item">
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else></span>
          </a>
          <a class="nav-item">
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>
      <!-- 待办事项输入框 -->
      <div class="form todo-new input-symbol">
        <input type="text" v-model="text" placeholder="请输入" @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <!-- 容器下半部分 -->
    <div class="content-scrollable list-items">
      <div v-for="item in items" :key="item">
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item'

export default {
  data () {
    return {
      todo: {
        title: '星期一',
        count: 12,
        locked: false
      },
      items: [
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false }
      ],
      text: ''
    }
  },
  methods: {
    onAdd () {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      })
      this.text = ''
    }
  },
  components: {
    item
  }
}
</script>

<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
