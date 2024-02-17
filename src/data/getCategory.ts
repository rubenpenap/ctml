import fetchData from "./common/AxiosGet"
import { ENDPOINT } from "../common/constants";

interface GetCategoryPathProps {
  param: string;
}

export default async function getCategory({ param }: GetCategoryPathProps) {
  const result = await fetchData(`${ENDPOINT.CATEGORIES}/${param}`)
  return result;
}
