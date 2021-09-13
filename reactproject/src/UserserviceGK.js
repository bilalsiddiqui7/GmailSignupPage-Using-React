import axios from 'axios'
import React from 'react'
const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : localStorage.getItem('token')
      },
  };

export const UserserviceGK = (data) => {
    let response= axios.get('',data)
    return response
}
