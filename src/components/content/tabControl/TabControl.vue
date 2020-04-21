<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" :class="{active: currentIndex == index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div> 
</template>

<script>
export default {
  components:{},
  props:{
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
   itemClick(index) {
     this.currentIndex = index;
   }
  }
}
</script>
<style scoped>
.tab-control {
  height: 36px;
  text-align: center;
  line-height: 40px;
  display: flex;
  color: rgb(122, 122, 122);
  font-size: 15px;
}

.tab-control-item {
  flex: 1;
}
.active span {
  width: 40px;
  display: inline-block;
  border-bottom: 2px solid var(--color-high-text);
}
.active {
  color: var(--color-high-text);
}
</style>