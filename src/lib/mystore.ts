import tagListModel from '@/models/tagListModel'
import recordListModel from '@/models/recordListModel'

const mystore: S = {
  // Record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),

  // Tag store
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.find(item => item.id === id)
  },
  createTag: (name: string) => {
    const message = tagListModel.create(name)
    if (message === 'duplicated') {
      window.alert('标签名重复了')
    } else if (message === 'success') {
      window.alert('添加成功')
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id) === 'success'
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name)
  }
}

export default mystore
