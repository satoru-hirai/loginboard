<template>
  <el-card class="box-card singin">
    <el-form>
      <p>
        <el-form-item label="loginId">
          <el-input
            v-model="loginId"
            type="text"
            placeholder=""
          />
        </el-form-item>
      </p>
      <p>
        <el-form-item label="password">
          <el-input
            v-model="password"
            type="password"
            placeholder=""
          />
        </el-form-item>
      </p>
      <el-form-item>
        <div class="signin-btn">
          <el-button
            type="primary"
            style="float: right"
            @click="login"
          >
            ログイン
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SigninComponent extends Vue{
  error = null;
  loginId = '';
  password = '';

  async login() {
    try {
      await this.$store.dispatch("login", {
        loginId: this.loginId,
        password: this.password,
        authUser: this.$store.state.registeredUser
      })
      this.$router.push("/")
    } catch (e) {
      this.error = e.message
    }
  }
};

</script>

<style scoped>
.box-card {
  width: 480px;
}

.singin {
  position: relative;
  top: 100px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}
</style>