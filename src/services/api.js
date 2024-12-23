import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333",
})

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Simulate a delay
    return new Promise((resolve) => setTimeout(() => resolve(response), 1000)) // 1 second delay
  },
  (error) => {
    return Promise.reject(error)
  }
)
