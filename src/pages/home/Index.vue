<template>
  <div>
    <Header />

    <form>
      <label for="content">content</label>
      <input type="text" id="content">
       <label for="content">expenditure</label>
      <input type="text" id="content">
       <label for="content">income</label>
      <input type="text" id="content">
      <button type="submit">등록</button>
    </form>
    <ul v-for="(item, index) in accountList" :key="index">
      <li>
        날짜 : {{ item.date }}
        내용 : {{ item.content }}
        소비 : {{ item.expenditure }}
        수입 : {{ item.income }}
      </li>
    </ul>
    <!-- <button @click="$store.commit('increment')"> + </button> -->
    <!-- <button @click="$store.commit('decrement')"> - </button> -->
    <button @click="$store.commit('addAccountList', dummydata)">add object</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import moment from 'moment'

export default {
  name: 'Index',
  computed: {
    count() {
      return this.$store.state.count
    },
    accountList() {
      return this.$store.state.accountList
    }
  },
  data() {
      return {
        dummydata: {
          date: moment().format(),
          content: "testContent",
          expenditure: 1500,
          income: 1000,
        }
      }
    },
  components: {
    Header
  },
}
</script>

<style scoped>
</style>
