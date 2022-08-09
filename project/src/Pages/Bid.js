import React, { useState } from "react"
import Select from 'react-select'
import WBS from "./WBS"
import Effort from "./Effort"
// import { useFormik } from "formik"
import Render from './Render'

function Bid(){
const options = [{
    label:'Admin',
    value:'Admin'
},{
    label:"Instructor",
    value:'Instructor'
},{
    label:"Player",
    value:'Player'
}
]

const [page,setPage] = useState('')

const change = (a) =>{
    setPage(a)
}
    return(
        <>
            <div className="flex">

                <div>
                    <Select options={options} />
                    <ul className="styleNone" >
                        <li><button onClick={() => change('WBS')}>WBS</button></li>
                        <li><button onClick={() => change('WBS')}>Quantity</button></li>
                        <li><button onClick={() => change('Effort')}>Effort</button></li>
                        <li><button onClick={() => change('Productivity')}>Productiviy</button></li>
                        <li><button onClick={() => change('Resources')} >Resources</button></li>
                        <li><button onClick={() => change('ResourceCost')} >Resource Cost</button></li>
                        <li><button onClick={() => change('Project')}>Project</button></li>
                        <li><button onClick={() => change('subContract')}>Sub contract</button></li>
                        <li><button onClick={() => change('Contigency')} >Contigency</button></li>
                        <li><button onClick={() => change('Infra')} >Infra</button></li>
                        <li><button onClick={() => change("costOfCapital")} >Cost of Capital</button></li>
                        <li><button onClick={() => change('overHead')}>Overhead</button></li>
                        <li><button onClick={() => change('Profit')}>Profit</button></li>
                        <li><button onClick={() => change('Summary')} >Summary</button></li>
                    </ul>
                </div>
                <div>
                   
                    <Render name={page} />
                </div>
            </div>
        </>
    )
}

export default Bid