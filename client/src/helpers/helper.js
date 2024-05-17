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
            const {data} = await axios.post('/api/login', {username, password});
            return Promise.resolve({data})
        }
    } catch (error) {
        return Promise.reject({error: "Password does not match..."})
    }
}

/** update user function */
export async function updateUser(response){
    try {
       const token = await localStorage.getItem('item');
       const data = await axios.put('/api/updateuser', response, {headers: {"Authorization": `Bearer ${token}`} });

       return Promise.resolve({data})
    } catch (error) {
        return Promise.reject({error: "Couldn't Update Profile...!"})
    }
}


/** generate OTP */
export async function generateOTP(username){
    try {
       const {data: {code}, status} = await axios.get('/api/generateOTP', {params: {username}});

       // send mail with the OTP
       if(status === 201) {
        let {data: {email}} = await getUser({username});
        let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
        await axios.post('/api/registerMail', {username, userEmail: email, text, subject: "Password Recovery OTP"})
       };
       return Promise.resolve(code)
    } catch (error) {
        return Promise.reject({error})
    }
}

/** verify OTP */
export async function verifyOTP({username, code}){
    try {
        const {data, status} = await axios.get('/api/verifyOTP', {params: {username, code}});
        return {data, status};
    } catch (error) {
        return Promise.reject(error);
    }
} 

/** reset password */
export async function resetPassword({username, password}){
    try {
        
    } catch (error) {
        return Promise.reject({error});
    }
}