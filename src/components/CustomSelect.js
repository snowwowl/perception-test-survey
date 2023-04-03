import React, { useState, useEffect } from 'react';
import {
    Select
} from 'antd';


export default function Gee({optionsData}){
    return(
        <>
            <Select
                options={optionsData}
                placeholder="Select option"
            />
        </>
    )
}