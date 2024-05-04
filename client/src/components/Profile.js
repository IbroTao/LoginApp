import React from "react";
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
import {passwordValidate} from '../helpers/validate.js'

import styles from '../styles/Username.module.css'

export default function Profile() {

    const formik = useFormik({
        initialValues: {
            password: 'admin@123'
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })

    return (
        <div className="container mx-auto">

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Profile</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            You can update the details.
                        </span>
                    </div>

                    <form className="pt-20" onSubmit={formik.handleSubmit}>

                        <div className="textbox flex flex-col items-center gap-6 ">
                            <div className="name flexw-3/4 gap-10">
                                <input {...formik.getFieldProps('firstName')} className={"styles.textbox"} type="text" placeholder="FirstName"/>
                                <input {...formik.getFieldProps('lastName')} className={"styles.textbox"} type="text" placeholder="LastName"/>
                            </div>

                            <div className="name flexw-3/4 gap-10">
                                <input {...formik.getFieldProps('mobile')} className={"styles.textbox"} type="text" placeholder="Mobile No."/>
                                <input {...formik.getFieldProps('email')} className={"styles.textbox"} type="text" placeholder="Email"/>
                            </div>

                            <input {...formik.getFieldProps({'addresss'})} className={'styles.textbook'} type="text" placeholder="Address"/>
                            <button className={styles.btn} type="submit">Sign In</button>

                            
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500 ">Can't get OTP? <button className='text-red-500'>Resend</button></span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}