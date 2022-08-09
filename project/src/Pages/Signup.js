import React from "react";
import {useFormik} from 'formik';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signup(){
    const history = useNavigate()
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            cpassword:''
        },
        onSubmit: async value =>{
            const username = value.username
            const email = value.email
            const password = value.password
            try {
                const response = axios.post('http://localhost:5000/sign',{username,email,password})
                const status = (await response).status
                console.log(status)
                if (status === 200) {
                    history('/bid')
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Username"></input><br></br>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email"></input><br/>
                <input type="text" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password"></input><br/>
                <input type="text" id="cpassword" name="cpassword" onChange={formik.handleChange} value={formik.values.cpassword} placeholder="Confirm Password"></input><br/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Signup