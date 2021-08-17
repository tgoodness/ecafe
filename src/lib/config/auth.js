const auth = {
  login: (cb) => {
    localStorage.setItem('auth', 'user');
    cb();
  },
  logout: (cb) => {
    localStorage.setItem('auth', '');
    localStorage.removeItem('crypto');
    localStorage.removeItem('user');
    localStorage.clear();
    cb();
  },
};
export default auth;
