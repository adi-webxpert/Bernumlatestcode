import axios from "axios";
import endpoints from "./contactEndpoints";
export default {
  sendEmail: async (data) => {
    return await axios.post(endpoints.sendEmailEndpoint, data);
  },
};
