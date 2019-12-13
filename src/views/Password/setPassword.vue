<template>
  <div class="setpasswordshangBox">
    <div class="headerShangBox">
      <router-link to="/setting" tag="span">
        <span class="returnBox">
          <van-icon name="arrow-left" />
        </span>
        <span class="cancelBox">
          <van-icon name="cross" />
        </span>
      </router-link>
    </div>
    <!-- 密码输入框 -->
    <span class="promptBox">请输入您要设置的密码 例如:(112233)</span>
    <div class="passwordInputBox">
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
    </div>
    <div class="confirmPasswordBox" @click="addPaymentPassword">
      <van-button plain type="primary" size="large">确认</van-button>
    </div>
    <div class="keyboardBox">
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
    <!-- 数字键盘 -->
  </div>
</template>
<script>
// @ is an alias to /src
import { Dialog } from "vant";
import axios from "axios";
export default {
  name: "setpasswordshang",
  data() {
    return {
      value: "",
      showKeyboard: true
    };
  },
  components: {},
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    addPaymentPassword() {
      let payPassword = this.value;
      console.log(payPassword);
      if (payPassword.length == 0) {
        Dialog.alert({
          title: "⚠️警告",
          message: "支付密码不能为空"
        }).then(() => {
          // on close
          //   this.$router.push("/setting");
        });
      } else if (payPassword.length <= 5) {
        Dialog.alert({
          title: "⚠️警告",
          message: "必须为六位数"
        }).then(() => {
          // on close
          //   this.$router.push("/setting");
        });
      } else {
        axios.post("/sign", { payPassword }).then(data => {
          console.log("注册成功", data);
        });
        this.$router.push("/setting");
      }
    }
  }
};
</script>
<style lang="less">
.setpasswordshangBox {
  position: relative;
  .headerShangBox {
    height: 7vh;
    border-bottom: 1px solid #ccc;
    line-height: 7vh;
  }
  .returnBox {
    font-size: 6vw;
    margin-left: 5vw;
  }
  .cancelBox {
    font-size: 6vw;
    margin-left: 3vw;
  }
  .promptBox {
    // margin: auto;
    text-align: center;
    width: 80vw;
    margin-left: 10vw;
    font-size: 7vw;
    position: absolute;
    top: 20vh;
  }
  .passwordInputBox {
    margin-top: 30vh;
  }
  .confirmPasswordBox {
    position: absolute;
    top: 54vh;
    width: 100%;
  }
}
</style>