import axios from "axios";

export default axios.create({
  baseURL: "https://api-portifolio-production.up.railway.app/",
  validateStatus: (status) => {
    return true;
  },
});
