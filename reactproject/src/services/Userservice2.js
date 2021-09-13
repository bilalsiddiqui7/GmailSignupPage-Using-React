import axios from 'axios'
// const config = {
//     headers: {
//       "Content-Type": "application/json",
//       },
//   };
export const Signin = async (data) => {
  console.log(data)
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data)
    console.log(response)
    console.log(response.data.id)
    return response
}
