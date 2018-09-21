<template>
  <div class="JClass">
    <div class="class" ref="class">
        <ul>
          <li class="classItem" @click="setActive(index)" v-for="(i, index) in classLists" :key="index">{{i}}</li>
        </ul>
    </div>
    <div class="classContent" ref="classRight">
      <div class="classRight">
         <JClassRight :index="initIndex"></JClassRight>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import JClassRight from './JClassRight.vue'
export default {

  name: 'JClass',
  components: {
    JClassRight
  },

  data () {
    return {
      klass: undefined,
      classRight: undefined,
      initIndex: 0,
      classLists: [
        '热门推荐', '手机数码', '家用电器', '电脑办公', '计生情趣', '美妆护肤', '个护清洁', '汽车用品', '京东超市', '男装', '男鞋', '女装', '女鞋', '母婴童装', '图书音像', '运动户外', '内衣配饰', '食品生鲜', '酒水饮料', '家具家装', '家居厨具', '箱包手袋', '钟表珠宝', '玩具乐器', '医药保健', '宠物生活', '礼品鲜花', '农资绿植', '生活旅行', '奢侈品', '全球购', '艺术邮币', '二手商品', '特产馆', '京东金融', '国际名牌', '拍卖', '房产'],
      options: {
        click: true,
        probeType: 3
      }
    }
  },
  mounted() {
    var _this = this;
    this.setActive(this.initIndex)
    this.$nextTick(() => {
      this.klass = new BScroll(this.$refs.class, this.options);
      this.classRight = new BScroll(this.$refs.classRight, this.options);
    })
  },
  methods: {
    setActive(index) {
      var allNodes = document.querySelectorAll('.classItem');
      var nodesArray=Array.prototype.slice.call(allNodes,0);
      nodesArray.map((item) => {
        item.classList.remove('active');
      })
      nodesArray[index].classList.add('active');
      var parentHeight = document.querySelector('.class').offsetHeight;
      this.initIndex = index;
      this.klass && this.klass.scrollTo(0, -1 * Math.min((allNodes[0].offsetHeight * index),(allNodes[0].offsetHeight * allNodes.length - parentHeight)), 300, 'bounce');
      this.classRight && this.classRight.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss" scoped>
.JClass{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  padding: 100px 0;
  background-color: #fff;
  overflow: hidden;
  color: #333;
  .class{
    flex: 0 0 auto;
    display: block;
    width: 170px;
    overflow-y: scroll;
    background-color: #f8f8f8;
    ul, .__panel{
      transition: transform .6s;
    }
    li{
      display: block;
      height: 92px;
      line-height: 92px;
      text-align: center;
      background-color: #f8f8f8;
      color: #333;
    }
    li.active{
      color: #f00;
      background-color: #fff;
    }
  }
  .classRight{
    flex: 1 1 auto;
  }
  .classContent{
    margin: 34px 18px 0;
  }
}
</style>
