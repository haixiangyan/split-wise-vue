import createId from '@/lib/idCreator'

const localStorageKeyName = 'tagList'

const tagxxx = {
  // Tag store
  tagList: [] as Tag[],
  findTag(id: string) {
    return this.tagList.find(item => item.id === id)
  },
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.tagList
  },
  createTag(name: string) {
    const id = createId().toString()
    const names = this.tagList.map(item => item.name)

    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复了')
      return
    }

    this.tagList.push({id, name})
    this.saveTags()

    window.alert('添加成功')
  },
  removeTag(id: string) {
    this.tagList = this.tagList.filter(item => item.id != id)
    this.saveTags()
  },
  updateTag(id: string, name: string) {
    // duplicated
    if (this.tagList.find(item => item.name === name)) {
      return 'duplicated'
    }

    const tag = this.tagList.find(item => item.id === id)
    // not found
    if (!tag) {
      return 'not found'
    } else {
      tag.name = name
      tagxxx.saveTags()
      return 'success'
    }
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList))
  }
}

tagxxx.tagList = tagxxx.fetchTags()

export default tagxxx
