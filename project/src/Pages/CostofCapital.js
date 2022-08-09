import React,{useState, useEffect} from "react";
import axios from "axios";
import Select from 'react-select'
// import { optionCSS } from "react-select/dist/declarations/src/components/Option";

function CostofCapital(){
    const [option, setOptions] = useState([])
    const [defaultValue, setdefaultValue] = useState(0)
    const getValues = async() => {
        try {
            const response = axios.get(`http://localhost:5000/getcostofcapital`)
            const data = []
            for(var i =0; i< (await response).data[0].length; i++){
                data[i] = {
                    id:i,
                    label: (await response).data[0][i],
                    value: (await response).data[0][i]
                }
            }
            setOptions(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getValues()
    }, [])
    return(
        <>
          {<Select options={option} />}
        </>
    )
}

export default CostofCapital