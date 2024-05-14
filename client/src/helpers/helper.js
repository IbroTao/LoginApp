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
        const {data} = await axios.get(`/api/user/${username}`);
        return {data};
    } catch (error) {
        return {error: "Password doesn't match"}
    }
}

/** register user function */
export async function registerUser(credentials){
    try {
        const {data: {msg }, status} = await axios.post(`/api/register`, credentials);

        let {username, email} = credentials;

        /** send email */
        if(status === 201){
            await axios.post('/api/registerMail', {username, userEmail: email, text: msg})
        }

        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({error})
    }
}

/** login user function */
export async function verifyPassword({username, password}) {
    try {
        if(username){
            await axios.post('/api/login', {username, password})
        }
    } catch (error) {
        return Promise.reject({error: "Password does not match..."})
    }
}