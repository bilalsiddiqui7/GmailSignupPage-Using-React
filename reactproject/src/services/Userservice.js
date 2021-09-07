import axios from 'axios'
const config = {
    headers: {
      "Content-Type": "application/json",
      },
  };
export const Signup = async (data) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data, config)
    console.log(response)
    return response
}
