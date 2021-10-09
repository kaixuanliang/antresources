<template>
  <div>
    <Header></Header>
    <router-view class="mainContent"></router-view>

  </div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: "Home",
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
