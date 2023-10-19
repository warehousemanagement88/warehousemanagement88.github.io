import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_ruangan.js";
import { urlFetch } from "./config/url_get_detail_ruangan.js";

get(urlFetch, isiData);
