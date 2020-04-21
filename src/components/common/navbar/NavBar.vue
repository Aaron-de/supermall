<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.nav-bar {
  height: 44px;
  display: flex;
  text-align: center;
  line-height: 44px;
}
.left {
  width: 60px;
}
.center {
  flex: 1;
}
.right {
  width: 60px;
}
</style>