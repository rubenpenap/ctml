import { axiosInstance } from "../middleware/AxiosInstance";

export default async function fetchData(endpoint: string, params?: Record<string, string>) {
  const queryString = params ? `?${new URLSearchParams(params)}` : "";
  const url = endpoint + queryString;
  const response = await axiosInstance.get(url);
  return response.data;
}