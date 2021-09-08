import axios from 'axios'
// const config = {
//     headers: {
//       "Content-Type": "application/json",
//       },
//   };
export const Signup = async (data) => {
    console.log(data)
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data)
    console.log(response)
    return response
}
