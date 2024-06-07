import { BASE_URL } from "@/api/interceptors"
import { IReputations } from "@/types/reputations.types"
import axios from "axios"

axios.defaults.baseURL = BASE_URL

export const ReputationsService = {
  async getAll() {
    const { data } = await axios.get<IReputations[]>('/Info/employer-reputation')
    return data
  }
}