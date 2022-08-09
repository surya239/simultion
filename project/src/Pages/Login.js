import React from "react";
import {useFormik} from 'formik';
function Login(){
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: async values =>{
            const username = values.username
            const password = values.password
            console.log(username, password)
        }
    })
    return(
        <>
            <form>
                <input autoComplete="off" onBlur={formik.handleBlur} type="text" name="username" id="username" value={formik.values.username} onChange={formik.handleChange} placeholder="Username"></input><br></br>
                <input autoComplete="off" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder="Password"></input><br/>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login