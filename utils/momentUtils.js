import axios from "axios";
import {footerMenus, headerMenus} from "../fakedb/navigation-menu";
import moment from "moment";

const momentUtils = {
    showDate : (data,format = 'MMM Do YY') => {
        return moment(data).format(format);
    }
}

export default momentUtils;