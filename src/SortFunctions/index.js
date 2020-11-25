import React from 'react'


const SortPrice = (order) => {
    if (order === "HighLow"){
        return "HighLow"
    } else if (order === "LowHigh"){
        return "LowHigh"
    }else{
        return null
    }
}

export default SortPrice