
const auth = {
  login: (cb) => {
    localStorage.setItem("auth", "user")
    cb();
  },
  logout: (cb) => {
    localStorage.setItem("auth", "user");
    localStorage.removeItem("admin");
    cb();
  },
};
export default auth;
