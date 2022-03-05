<!--  -->
<template>
  <div class="">
    <detail-nav-bar></detail-nav-bar>
    <my-scroll>
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods"/>

    </my-scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import myScroll from "components/common/scroll/Scroll.vue";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailBaseInfo from './childComps/DetailBaseInfo'

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import  {Goods, Shop, GoodsParam} from "@/api/detail/detail.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { NavBar, DetailNavBar, myScroll, DetailSwiper, DetailGoodsInfo,DetailBaseInfo },
  data() {
    //这里存放数据
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.iid = this.$route.params.iid;

    this.$API.detail.getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

        console.log(this.goods);
    //   // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

    //   // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      console.log(this.detailInfo);

    //   // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>