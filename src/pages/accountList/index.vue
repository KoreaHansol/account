<template>
  <div>
      <ul>
        <li v-for="(item, index) in accountList" :key="index">
          {{ item }}
        </li>
      </ul>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'List',
  mounted() {
    this.sortAccountList()
  },
  data() {
    return {
      accountList: [],
    }
  },
  methods: {
    sortAccountList() {
      this.accountList = _.sortBy(this.$store.state.accountList, 'date');
    }
  }
}
</script>

<style scoped>
</style>
