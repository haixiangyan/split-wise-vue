import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'

Vue.use(Vuex)

const RECORD_LIST = 'recordList'

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(RECORD_LIST) || '[]')
    },
    createRecord(state, record: RecordItem) {
      state.recordList.push(clone(record))
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem(RECORD_LIST, JSON.stringify(state.recordList))
    },
  }
})

export default store
