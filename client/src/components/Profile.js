import React, {useState} from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/profile.png'
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
import {registerValidation} from '../helpers/validate.js'
import convertToBase64 from "../helpers/convert.js"

import styles from '../styles/Username.module.css'

export default function Profile() {

    const [file, setFile] = useState()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            address: '',
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values =  await Object.assign(values, {profile: file || ''})
            console.log(values)
        }
    })

    /**formik doesn't support file upload so we need to create this handler */
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64)
    }

    return (
        <div className="container mx-auto">

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen mb-8">
                <div className={styles.glass} style={{width: '40%'}}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Profile</h4>
                        <span className="py-3 text-xl w-2/3 text-center text-gray-500">
                            You can update the details.
                        </span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-3">
                            <label htmlFor="profile">
                                <img src={file || avatar } className={styles.profile_img} alt="avatar"></img>
                            </label>

                            <input onChange={onUpload} type="file" id="profile" name="profile"/>
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps('firstName')} className={styles.textbox} type="text" placeholder="FirstName*"/>
                                <input {...formik.getFieldProps('lastName')} className={styles.textbox} type="text" placeholder="LastName"/>
                            </div>

                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps('mobile')} className={styles.textbox} type="text" placeholder="Mobile No."/>
                                <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder="Email*"/>
                            </div>

                                <input {...formik.getFieldProps('address')} className={styles.textbox} type="text" placeholder="Address"/>
                                <button className={styles.btn} type="submit">Update</button>
                        </div>

                        <div className="wrapper">
                            <div className="text-center py-3">
                                <span className="text-gray-500 ">come back later? <Link className='text-red-500' to="/">Logout</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
            .wrapper {
                margin-bottom: 20px; // Adjust the value as needed
            }
        `}</style>
        </div>
    )
}