const storage = {
  get(item) {
    return JSON.parse(localStorage.getItem(item));
  },

  set(item, value) {
    localStorage.setItem(item, JSON.stringify(value));
  },
};

export default storage;
