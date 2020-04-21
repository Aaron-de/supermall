<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isShow"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <!-- 如果属性放在slot中，会被替换，就没有其属性 -->
    <div :style="activeStyle" class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'rgba(255,87,119)'
    }
  },
  data(){
    return {
      
    }
  },
  
  methods: {
    itemClick() {
      return this.$router.replace(this.path)
    },
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1;
      
    },
    activeStyle() {
      return this.isShow ? {color: this.activeColor} : {}
    }
  },
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  padding: 3px;
}
.text {
  font-weight: 500;
}
</style>
