import { BASE_URL } from "@/api/interceptors"
import { IReputations } from "@/types/reputations.types"
import axios from "axios"

axios.defaults.baseURL = BASE_URL

export const ReputationsService = {
  async getAll() {
    const { data } = await axios.get<IReputations[]>('/Info/get-all-subjects')
    return data
  },

  async getById(id: string): Promise<IReputations | null> {
    try {
      const { data } = await axios.get<IReputations>(`/Info/get-subject-by-id/${id}`);
      return data;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.error('Reputation not found:', id);
      } else {
        console.error('Error fetching reputation data:', error);
      }
      return null;
    }
  },
}

