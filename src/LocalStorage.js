export default class LocalStorage {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key, defaultValue = null) {
    if (!LocalStorage.has(key)) {
      return defaultValue;
    }

    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return defaultValue;
    }
  }

  static has(key) {
    return localStorage.getItem(key) !== null;
  }

  static remove(key) {
    return localStorage.removeItem(key);
  }
}
