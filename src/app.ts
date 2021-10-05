import axios from 'axios'
export async function logStatusFromAPICall(url:string) {   
  const response=await axios.get(url)
  return response.data['status'] === "success";
}