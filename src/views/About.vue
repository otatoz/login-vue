<template>
  <div class="about">
    <h1>登陆成功</h1>
    <el-button @click="goBack">退出登录</el-button>
    {{info}}
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState('login',['info'])
  },
  created(){

  },
  methods:{
    ...mapActions('login',['layout']),
    goBack(){
      this.layout().then((res)=>{
        this.$router.push({path:'/'})
      })
    }
  }
}
</script>
