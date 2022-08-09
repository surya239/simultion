import React,{useEffect, useState} from "react";
import axios from "axios";
import Contigency from "./Contigency";

function SelectContigency(){
    return(
        <>
            <Contigency name='requirement'></Contigency><br></br>
            <Contigency name='design'></Contigency><br></br>
            <Contigency name='coding'></Contigency><br></br>
            <Contigency name='testing'></Contigency><br></br>
            <Contigency name='deployment'></Contigency><br></br>
        </>
    )
}

export default SelectContigency