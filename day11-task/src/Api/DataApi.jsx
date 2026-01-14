import axios from "axios"

  export const fetchData = async()=>{
//  const {data} = await axios.get('https://api.escuelajs.co/api/v1/products')
const {data} = await axios.get('https://dummyjson.com/products')

return (data.products);

 
}

 