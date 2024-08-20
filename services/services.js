import { navigationServices } from "./navigationServices";
import {portfolioServices} from "./portfolioServices";
import {settingsServices} from "./settingsServices";
import {contactUsServices} from "./contactUsServices";



export default {
    ...navigationServices,
    ...portfolioServices,
    ...settingsServices,
    ...contactUsServices
};