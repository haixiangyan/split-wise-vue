import clone from '@/lib/clone'

const localStorageKeyName = 'recordList'

const recordxxx = {
  recordList: [] as RecordItem[],
  // Record store
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.recordList
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))
  },
  createRecord(record: RecordItem) {
    this.recordList.push(clone(record))
    recordxxx.saveRecords()
  }
}

recordxxx.fetchRecords()

export default recordxxx
