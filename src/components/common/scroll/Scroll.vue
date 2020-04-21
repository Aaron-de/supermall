<template>
  <div class="wrap" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components:{},
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 实时监听滚动
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    // 监听上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('load-more');
     
    })
  },
}
</script>
<style scoped>
</style>