type RecordItem = {
  tags: string[];
  note: string;
  type: string;
  amount: number;
}

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
  remove: (id: string) => 'success';
}

type S = {
  tagList: Tag[];
  findTag: (id: string) => Tag | undefined;
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';

  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}
