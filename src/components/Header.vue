<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <img class="logo" :src="logoUrl" @click="$router.push('/homepage')" />
    <el-menu-item index="/homepage">首页</el-menu-item>
    <el-menu-item index="/blog">博客</el-menu-item>
    <el-menu-item index="/library">藏书馆</el-menu-item>
    <el-submenu>
      <template slot="title">网盘资源</template>
      <el-menu-item index="/personalNetDisk">个人资源</el-menu-item>
      <el-menu-item index="/communalNetDisk">公共资源</el-menu-item>
    </el-submenu>
    <el-menu-item index="/myShare">我的分享</el-menu-item>
    <el-menu-item index="/archive">归档</el-menu-item>
    <div class="btn">
      <el-button type="text" v-show="!isLogin">注册</el-button>
      <el-button type="text" v-show="!isLogin">登录</el-button>
      <el-button type="text" v-show="isLogin">退出</el-button>
    </div>
  </el-menu>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: 'HomePage',
      logoUrl: require('@/assets/images/logo/logo_header.png'),
      isLogin: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

.logo {
  float: left;
  margin: 10px 24px 0 70px;
  display: inline-block;
  height: 40px;
  cursor: pointer;
}

.btn {
  padding: 10px 70px 0px 0px;
  float: right;
}

.el-menu-demo {
  flex: 1;
}

</style>
