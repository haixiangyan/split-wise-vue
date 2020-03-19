let id: number = parseInt(window.localStorage.getItem('_id_max') || '0') || 0

function createId() {
    id += 1
    return id
}

export default createId
