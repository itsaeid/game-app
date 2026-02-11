import { api } from "./api"

export const fetcher = async(url: string)=> {
    const res= await api.get(url, {
        params: {
            key: process.env.NEXT_PUBLIC_RAWG_API_KEY
        }
    })

    return res.data
}