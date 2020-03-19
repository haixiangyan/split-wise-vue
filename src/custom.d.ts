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

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
}
