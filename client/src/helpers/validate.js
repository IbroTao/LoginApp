import toast from "react-hot-toast"

/**vaidate login page username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}

/**validate password */
function passwordVerify(error={}, values){
    if(!values.password){
        error.password = toast.error('Password Required...!')
    } else if(values.password.includes(" ")) {
        error.password = toast.error('Wrong Password...!')
    };

    return error;
}

/**validate username*/
function usernameVerify(error={}, values) {
    if(!values.username){
        error.username = toast.error('Username Required...!')
    } else if(values.username.includes(" ")) {
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}
