import axios from "axios"

const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?"

export const instance = axios.create({
    baseURL: BASE_URL
})