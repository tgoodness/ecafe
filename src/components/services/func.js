/**
 * This function was written
 * @author
 * Akinyemi Tobiloba
 */
const Deebezt = {
  isEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  },

  isPhoneNumber(str) {
    return str.length === 11 && (str.charAt(2) === "0" || str.charAt(2) === "1")
      ? true
      : false;
  },

  isUrl(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query str
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  },

  strLen(str) {
    str = str.toString();
    return this.isStr(str) ? str.length : 0;
  },

  date(str = "") {
    return str !== "" ? new Date(str) : new Date();
  },

  replaceAll(str, needle) {
    return str.replace(/\s+/g, needle);
  },

  split(str, needle) {
    return str.split(needle);
  },

  randomNumber() {
    return Math.random().toString(36);
  },

  numberFormat(value) {
    value = value.toString();
    value = value.split(".")[0];
    value = value.replace(/[\D\s_]+/g, "");
    value = value ? parseInt(value, 10) : 0;
    value = value.length >= 4 ? "" : value.toLocaleString("en-US");
    return value + ".00";
  },

  upperCase(str) {
    return str.toUpperCase();
  },

  lowerCase(str) {
    return str.toLowerCase();
  },

  isStr(str) {
    return str !== "" && str !== undefined ? true : false;
  },

  isObj(value) {
    return Object.keys(value).length !== 0 && value.constructor === Object
      ? true
      : false;
  },

  isArr(value) {
    return value.length > 0 && value !== undefined ? true : false;
  },

  isStrongPassword(str) {
    return str.match(
      /(?=^.{8,32}$)(?=(?:.*?\d){1})(?=.*[a-z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/
    )
      ? true
      : false;
  },

  setSession(key, value, json = false) {
    try {
      if (json) localStorage.setItem(key, JSON.stringify(value));
      else localStorage.setItem(key, value);
    } catch {
      return false;
    }
  },

  getSession(key, json = false) {
    try {
      if (json) return JSON.parse(localStorage.getItem(key));
      else return localStorage.getItem(key);
    } catch {
      return false;
    }
  },
  // statusCode(code) {
  //   switch (code) {
  //     case 400:
  //       return "Invalid Parameters";
  //     case 404:
  //       return "Resources not found";
  //     case 405:
  //       return "Method Not allowed";
  //     case 500:
  //       return "Internal Server Error";
  //     default:
  //       return "Something went wrong";
  //   }
  // },

  // requestError(error) {
  //   if (error.response) return error.message;
  //     return error.message === "Network Error"
  //       ? "No connection"
  //       : error.message;
  // },

  requestError(error) {
    if (error.response) {
      return error.response.data.responseMessage;
    } else {
      return error.message;
    }
  },

  millisToTime(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds === 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  },
  formatTitle() {
    let title = window.location.pathname;

    title = title.replace("/", "");
    title = title.replace("-", " ");
    title = this.split(title, "/")[1];
    //title = this.capitalize(title);
    console.log(title)
    return title;
  },
  capitalize(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  },
};

export default Deebezt;
