import fetchData from "./common/AxiosGet"
import { ENDPOINT } from "../common/constants";

interface GetItemProps {
  param: string;
}

export default async function getItem(param: GetItemProps) {
  const result = await fetchData(`${ENDPOINT.ITEMS}?ids=${param}`)
  return result
}