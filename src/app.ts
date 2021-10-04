import axios from 'axios'
export async function getData() {
   const resp = await axios.get("https://dog.ceo/api/breeds/image/random");
   const res=resp.toString();
   //console.log(resp.data['status']);
   return resp.data['status'];
}
getData();