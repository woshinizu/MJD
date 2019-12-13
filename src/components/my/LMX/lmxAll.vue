<template>
  <div >
    <cancel></cancel>
    <done></done>
    <wait></wait>
    <waitHUO></waitHUO>
  </div>
</template>
<script>
// @ is an alias to /src
import cancel from "@/components/my/LMX/cancel"
import done from "@/components/my/LMX/done"
import wait from "@/components/my/LMX/wait"
import waitHUO from "@/components/my/LMX/waitHUO"

export default {
  name: "lmxAll",
  data() {
    return {};
  },
  created() {
    
  },
  methods: {
      oldShop(){
          this.$router.push('/homePage/head')
      },
      deletShop(){
    //       alert(Dialog.confirm({
    //     title: '标题',
    //     message: '弹窗内容'
    //      }).then(() => {
    //    // on confirm
    //    }).catch(() => {
    //      // on cancel
    //    }))
    

      }

  },
  components: {
    cancel,done,wait,waitHUO
  }
};
</script>
// <style lang="less"scoped>
// .myALL {
//   margin-top: 1.5vh;
//   background: rgb(255, 254, 254);
//   height: 21vh;
//   position: relative;
//   .shopHeader {
//     width: 100%;
//     height: 12vw;
//     .MLeftOne,
//     .MLeftTow {
//       width: 5vw;
//       height: 5vw;
//       margin: 3vw;
//       text-align: center;
//       line-height: 6vw;
//     }
//     .shopName {
//       width: 41vw;
//       height: 5vw;
//       margin: 3vw 0;
//       font-weight: 600;
//     }
//     .MLeftThree {
//       margin: 4vw;
//     }
//   }
// }
// .shopLMX {
//   position: absolute;
//   bottom: 3vh;
//   left: 22vh;
// }
// .van-tag--default.van-tag--plain {
//   color: #969799;
//   margin-right: 4vw;
//   height: 18px;
// }
// .shopMain {
//   .photo {
//     height: 21vw;
//     width: 21vw;
//     margin-left: 5vw;
//   }
//   .shopText {
//     margin-top: 4vw;
//     margin-left: 5vw;
//     width: 44vw;
//     height: 9vw;
//     font-size: 12px;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 2;
//     overflow: hidden;
//   }
// }
// </style>