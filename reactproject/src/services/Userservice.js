import axios from 'axios'

// const config = {
//     headers: {
//       "Content-Type": "application/json",
//       },
//   };
export const SignUp = function (data) {
    return new Promise((resolve, reject) => {
    axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data)
        .then(resolve => {
            console.log(resolve)
        }).catch(error => {
            console.log(error)
        })
    });
}


