<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="img-active">
      <div class="text" slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="category">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="img-active">
      <div class="text" slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="cart">
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="img-active">
      <div class="text" slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="img-active">
      <div class="text" slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  components:{
    TabBar,
    TabBarItem
  },
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
img {
  width: 24px;
  height: 24px;
  /* 解决图片多的距离——baseline */
  vertical-align: middle;
}
.text {
  font-size: 14px;
}
</style>
