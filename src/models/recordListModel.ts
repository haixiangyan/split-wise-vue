const localStorageKeyName = 'recordList'

const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem): RecordItem {
    return JSON.parse(JSON.stringify(data))
  },
  fetch(): RecordItem[] {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.data
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default recordListModel
