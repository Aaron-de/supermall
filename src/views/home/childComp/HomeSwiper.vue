<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.herf">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  components:{
    Swiper, SwiperItem
  },
  props:{
    banners: {
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
  },

}
</script>
<style scoped>
</style>
