<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @load-more="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recom-view :recommends="recommends"></recom-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="titles" @item-click="itemClick(index)" @tab-click="tabClick"></tab-control> 
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBack" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from 'views/home/childComp/HomeSwiper'
import RecomView from 'views/home/childComp/RecomView'
import FeatureView from 'views/home/childComp/FeatureView'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'

export default {
  components:{
    NavBar,
    Scroll,
    
    TabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    RecomView,
    FeatureView
  },
  props:{},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  data(){
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBack: false
    }
  },
  // 发送网络请求,获取数据,可在浏览器vue框架中查看,是异步操作
  created() {
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  methods: {
    // 事件监听方法
    // 点击事件
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBack = -position.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    // 网络请求方法
    // 1.获取轮播滚动图数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // 函数中的变量执行完会被回收 
        // console.log(res)
        // 将其保存
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 2.获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

         this.$refs.scroll.finishPullUp();
      })
    }
  },
  
}
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  color: #fff;
  background-color: rgb(255, 129, 152);
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 999;
}
.content {
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0; */
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>