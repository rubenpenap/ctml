import fetchData from "./common/AxiosGet"
import { ENDPOINT } from "../common/constants";

interface GetItemDescriptionProps {
  param: string;
}

export default async function getItemDescription(param: GetItemDescriptionProps) {
  const result = await fetchData(`${ENDPOINT.ITEMS}/${param}/description`)
  return result
}