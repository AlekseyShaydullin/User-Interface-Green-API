import { apiUrl, eventStateInstance } from "../utils/constants";
import { TRequest } from "../utils/type/type";

const checkRes = <T>(res: Response): Promise<T> => {
  if (res.ok) {                                       
    return res.json()
  } else {
    throw Error(`error ${res}`)
  }
}


const request: TRequest = async <T>(idInstance: string | null, apiTokenInstance: string | null, event: string, options?: RequestInit) => {
  const res = await fetch(`${apiUrl}/waInstance${idInstance}/${event}/${apiTokenInstance}`, options);
  const result: Promise<T> = checkRes(res);
  return result;
}

export async function getStateInstance (idInstance: string | null, apiTokenInstance: string | null) {
  return await request(idInstance, apiTokenInstance, eventStateInstance, {
    method: 'GET',
    redirect: 'follow'
  })
}