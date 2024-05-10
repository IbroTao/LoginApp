import axios from "axios"

/** MAKE API REQUEST */


/** authenticate function */
export async function authenticate(username) {
    try {
        return await axios.post('/api/authenticate', {username})
    } catch (error) {
        return ({error: "Username doesn't exist"})
    }
}

/** get user details */
export async function getUser({username}){
    try {
        
    } catch (error) {
        return {error: "Password doesn't match"}
    }
}