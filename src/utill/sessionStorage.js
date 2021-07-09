export function getItem(key) {
    const value = sessionStorage.getItem(key);
    return value === null ? (key === 'data' ? null : []) : JSON.parse(value);
}

export function setItem(key, value) {
    if(value === null || value === undefined) return;
    sessionStorage.setItem(key, JSON.stringify(value));
}