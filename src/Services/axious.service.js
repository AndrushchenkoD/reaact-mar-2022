import axios from "axios";

import {baseURL} from "../Constants";

const axiousService = axios.create({baseURL});

export {
    axiousService
}