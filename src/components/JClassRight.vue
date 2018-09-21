<template>
  <div class="JClassRight" v-if="itemList">

    <img class="topImg" v-if="itemList.topImg" :src="itemList.topImg" alt="">
    <div v-for="(item, index) in itemList.line" :key="index">
      <p class="title">
        <span class="ignore">{{item.name}}</span>
        <a v-if="item.more" href="/">{{item.more}}</a>
      </p>
      <div class="items">
        <a v-for="(i, idx) in item.items" :key="idx" :href="i.href || 'javascript:;'">
          <img :src="i.img" alt="">
          <span>{{i.name}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'JClassRight',
  props: ['index'],
  computed:{
    itemList() {
      return this.itemLists[this.index];
    }
  },
  data () {
    return {
      itemLists: [
        {
          line: [
            {
              name: '热门分类',
              more: '排行榜',
              items: [
                {
                  img: require('../assets/img/class-1-1_1.jpg'),
                  name: '手机'
                },
                {
                  img: require('../assets/img/class-1-1_2.jpg'),
                  name: '剃须刀'
                },
                {
                  img: require('../assets/img/class-1-1_3.jpg'),
                  name: '充电宝'
                },
                {
                  img: require('../assets/img/class-1-1_4.jpg'),
                  name: '空调'
                },
                {
                  img: require('../assets/img/class-1-1_5.jpg'),
                  name: '耳机'
                },
                {
                  img: require('../assets/img/class-1-1_6.jpg'),
                  name: '电饭煲'
                },
                {
                  img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t24832/257/76646129/14607/749ad0f9/5b641b14Na8f4eee2.png',
                  name: 'U盘'
                },
                {
                  img: 'https://img20.360buyimg.com/focus/s140x140_jfs/t17962/238/2678578741/19614/71205ad3/5b056472N771896da.png',
                  name: '电风扇'
                },
                {
                  img: 'https://img11.360buyimg.com/focus/s140x140_jfs/t21169/84/2135706158/31220/3cc6d03a/5b489479N36f3292b.png',
                  name: '避孕套'
                },
                {
                  img: 'https://img11.360buyimg.com/focus/s140x140_jfs/t25690/257/69721659/19227/e7c534fa/5b643170Nb5a062c5.png',
                  name: '鼠标'
                },
                {
                  img: 'https://img20.360buyimg.com/focus/s140x140_jfs/t22396/333/2543824926/7280/300e8eb9/5b642c14Nb4fc4a44.png',
                  name: '洗衣液'
                }
              ]
            },
            {
              name: '家电热搜',
              items: [
                {
                  img: require('../assets/img/class-1-2_1.jpg'),
                  name: '冰箱'
                },
                {
                  img: require('../assets/img/class-1-2_2.jpg'),
                  name: '洗衣机'
                },
                {
                  img: require('../assets/img/class-1-2_3.jpg'),
                  name: '电视'
                }
              ]
            },
            {
              name: '热卖手机',
              items: [
                {
                  img: require('../assets/img/class-1-3_1.jpg'),
                  name: '华为手机'
                },
                {
                  img: require('../assets/img/class-1-3_2.jpg'),
                  name: '小米手机'
                },
                {
                  img: require('../assets/img/class-1-3_3.jpg'),
                  name: '苹果'
                }
              ]
            }
          ]
        },
        {
          topImg: require('../assets/img/class-2.jpg'),
          line: [
            {
              name: '热门品牌',
              items: [
                {
                  img: require('../assets/img/class-2-1_1.jpg'),
                  name: '小米'
                },
                {
                  img: require('../assets/img/class-2-1_2.jpg'),
                  name: '华为'
                },
                {
                  img: require('../assets/img/class-2-1_3.jpg'),
                  name: '荣耀'
                },
                {
                  img: require('../assets/img/class-2-1_4.jpg'),
                  name: 'iPhone'
                },
                {
                  img: require('../assets/img/class-2-1_5.jpg'),
                  name: 'vivo'
                },
                {
                  img: require('../assets/img/class-2-1_6.jpg'),
                  name: 'OPPO'
                },
                {
                  img: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg',
                  name: '魅族'
                }
              ]
            },
            {
              name: '手机通讯',
              items: [
                {
                  img: require('../assets/img/class-2-2_1.jpg'),
                  name: '老人机'
                },
                {
                  img: require('../assets/img/class-2-2_2.jpg'),
                  name: '手机'
                },
                {
                  img: require('../assets/img/class-2-2_3.jpg'),
                  name: '全面屏手机'
                },
                {
                  img: require('../assets/img/class-2-2_4.jpg'),
                  name: '游戏手机'
                },
                {
                  img: require('../assets/img/class-2-2_5.jpg'),
                  name: '拍照手机'
                }
              ]
            },
            {
              name: '运营商',
              items: [
                {
                  img: require('../assets/img/class-2-3_1.jpg'),
                  name: '合约机'
                },
                {
                  img: require('../assets/img/class-2-3_2.jpg'),
                  name: '选号卡'
                },
                {
                  img: require('../assets/img/class-2-3_3.jpg'),
                  name: '办套餐'
                },
                {
                  img: require('../assets/img/class-2-3_4.jpg'),
                  name: '京东网厅'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.JClassRight{
  .topImg{
    margin-top: -30px;
    margin-bottom: 30px;
  }
  .title{
    display: flex;
    justify-content: space-between;
    span{
      font-size: 28px;
      font-weight: 600;
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 10px;
    a {
      flex: 0 0 auto;
      display: block;
      width: 33.33333%;
      text-align: center;
      img {
        display: block;
        width: 140px;
        height: 140px;
        margin: 0 auto;
      }
      span {
        display: block;
        margin-top: 4px;
        height: 70px
      }
    }
  }
}
</style>
