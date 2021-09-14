const auth = {
  login: (cb) => {
    localStorage.setItem('auth', 'admin');
    cb();
  },
  logout: (cb) => {
    localStorage.setItem('auth', '');
    localStorage.removeItem('admin');
    localStorage.clear();
    cb();
  },
};
export default auth;
