import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/idCreator'

Vue.use(Vuex)

const RECORD_LIST = 'recordList'
const TAG_LIST = 'tagList'

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  getters: {
    findTag: state => (id: string) => {
      return state.tagList.find(item => item.id === id)
    }
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
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem(TAG_LIST) || '[]')
    },
    createTag(state, name: string) {
      const id = createId().toString()
      const names = state.tagList.map(item => item.name)

      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了')
        return
      }

      state.tagList.push({id, name})
      store.commit('saveTags')

      window.alert('添加成功')
      return 'success'
    },
    saveTags(state) {
      window.localStorage.setItem(TAG_LIST, JSON.stringify(state.tagList))
    },
  }
})

export default store
