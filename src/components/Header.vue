<template>
  <div>
    <ul>
        <li><router-link to="/">홈</router-link></li>
        <li><router-link to="/list">목록</router-link></li>
        <li><router-link to="/add">등록</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
