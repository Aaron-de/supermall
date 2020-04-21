<template>
  <div class="recom-view">
    <div v-for="(item,index) in recommends" :key="index" class="recom-view-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.recom-view {
  margin-top: 10px;
  display: flex;
  font-size: 13px;
  padding-bottom: 18px;
  border-bottom: 8px solid rgb(238,238,238)
}
.recom-view-item {
  flex: 1;
  text-align: center;
}
.recom-view-item img {
  width: 74px;
  height: 74px;
}
</style>