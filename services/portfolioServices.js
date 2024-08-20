import axiosUtils from "../utils/axiosUtils";


export const portfolioServices = {
    getProjects : async (page = 1) => {
        return await axiosUtils.get(`Projects/projectByPage?page_no=${page}`);
    },
    getSingleProjects : async (id) => {
        return await axiosUtils.get(`Projects/projectById?id=${id}`);
    }
}