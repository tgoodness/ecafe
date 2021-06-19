import { adminUrl } from "./url";
import axios from "axios";

const accessToken = {
  generateToken() {
    return axios.get(adminUrl + "auth", {
      headers: {
        Authorization: "Basic " + btoa("deebezttech@gmail.com:deebezt.ecafe"),
      },
    });
  },
};

export default accessToken;
