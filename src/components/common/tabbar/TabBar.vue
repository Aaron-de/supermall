<template>
  <div class="tab-bar">
    <slot></slot>
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
.tab-bar {
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: red; */
  display: flex;
}
</style>