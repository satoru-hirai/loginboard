<template>
  <el-card class="box-card singup">
    <el-form>
      <el-form-item label="loginId">
        <el-input
          v-model="loginId"
          type="text"
          placeholder=""
        />
      </el-form-item>
      <el-form-item label="password">
        <el-input
          v-model="password"
          type="password"
          placeholder=""
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="float: right"
          @click="registration"
        >
          新規登録
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import{Component, Vue} from 'vue-property-decorator';

@Component({})
export default class SignupComponent extends Vue{
  error = null;
  loginId = '';
  password = '';

async registration() {
  try {
  console.log('a');
    await this.$store.dispatch("registration", {
      loginId: this.loginId,
      password: this.password
    });
    this.$router.push("/signin");
  }catch(e){
    this.error = e.message;
  }
}
}
</script>

<style scoped>
.box-card {
  width: 480px;
}

.singup {
  position: relative;
  top: 100px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}
</style>