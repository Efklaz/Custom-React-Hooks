// @flow
import * as React from 'react';
import {useState} from "react";

export default function useInput(inital) {
    const [value, setValue] = useState(inital);
    const onChange = (e)=>{
        setValue(e.target.value)
    }
    return {
        value, onChange
    }

};