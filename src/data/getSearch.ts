import fetchData from "./common/AxiosGet"
import { ENDPOINT } from "../common/constants";

interface GetSearchProps {
  param: string;
}

export default async function getSearch({ param }: GetSearchProps){
  const result = await fetchData(`${ENDPOINT.SEARCH}?q=${param}`)
  return result
}