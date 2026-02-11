import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_RAWG_BASE_URL;

if(!baseURL) {
    throw new Error("BASE_URL is not defined in environment variables");
}

export const api = axios.create({
    baseURL,
    timeout: 10000
})