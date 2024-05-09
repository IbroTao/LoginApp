import axios from "axios"

/** MAKE API REQUEST */


/** authenticate function */
export async function authenticate(username) {
    try {
        return await axios.post('/api/authenticate')
    } catch (error) {
        return ({error: "Username doesn't exist"})
    }
}