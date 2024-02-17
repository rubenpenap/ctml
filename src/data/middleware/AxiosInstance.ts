import axios from 'axios'
import { API_BASE_URL } from '../../common/constants'

export const axiosInstance = axios.create({
  timeout: 60000,
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
