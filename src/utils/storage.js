export function save(data) {
  const keys = Object.keys(data);
  keys.forEach(key => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
}

export function load(key) {
  const dataString = localStorage.getItem(key);
  if (dataString === null) {
    return false;
  }
  return JSON.parse(dataString);
}

export function remove(key) {
  localStorage.removeItem(key);
}
