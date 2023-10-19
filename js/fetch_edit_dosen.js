import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_dosen.js";
import { urlFetch } from "./config/url_get_detail_dosen.js";

get(urlFetch, isiData);
