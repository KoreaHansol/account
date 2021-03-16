<template>
  <div>
      {{ accountList }}
  </div>
</template>
<script>
export default {
  name: 'List',
  computed: {
    accountList() {
      return this.$store.state.accountList
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
