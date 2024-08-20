import axiosUtils from "../utils/axiosUtils";
import {APIS} from "../configs/constant.config";


export const contactUsServices = {
    contactUs : async (data) => {
        return await axiosUtils.post(APIS.contactUs,data);
    },
}