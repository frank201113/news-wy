<template>
  <div
    :class="{ 'channel-closed': isClose }"
    class="wap-section channel-bar">
    <ul class="wap-linklist">
      <li
        v-for="(item, index) in category"
        :key="index"
        class="link-item">
        <a :href="item.linkAddress">{{ item.name }}</a>
      </li>
    </ul>
    <span
      class="toggle-btn"
      @click="toggleClose"
    >
      <em>展开/收起</em>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
    return {
      isClose: true
    }
  },
  methods: {
    toggleClose: function() {
      this.isClose = !this.isClose
    }
  }
}
</script>

<style lang="css">
@import "../../assets/css/index/classification.css";
</style>
