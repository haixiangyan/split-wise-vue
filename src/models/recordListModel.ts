import clone from '@/lib/clone'

const localStorageKeyName = 'recordList'

const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    this.data.push(clone(record))
    this.save()
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
