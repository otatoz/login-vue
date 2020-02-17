<template>
  <div class="home">
    <h1>登陆界面</h1>
    <el-form label-width="80px" :model="formLogin">
      <el-form-item label="姓名">
        <el-input v-model="formLogin.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type='password' v-model="formLogin.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="toHome">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      formLogin:{
        type:'customer'

      }
    }
  },
  computed:{
    ...mapState('login',['info'])
  },
  created(){

  },
  methods:{
    ...mapActions('login',['loginHandler','userInfo']),
    toHome(){
      this.loginHandler(this.formLogin).then((res)=>{
        this.$router.push({path:'/about'})
      })
    }
  }
}
</script>

<style scoped>
  .home{
    width: 50%;
    margin-left: 25%;
  }
</style>

