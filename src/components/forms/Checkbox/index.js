import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import SortPrice from './../../../SortFunctions/index'

const Checkbox = ({ children, ...otherProps }) => {

    const {handleSort} = otherProps

    // const handleSort = (e) => {
    //     console.log(e)
    //     SortPrice(e)
    // }

    return (

        <form>
            <h2>Sort By</h2>
        <label><input
          type="radio"
          name="sort"
          value="HighLow"
          onChange={(e) => handleSort(e.target.value)}
        /> Price (high to low)</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value="LowHigh"
          onChange={(e) => handleSort(e.target.value )}
        /> Price (low to high)</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value="default"
          onChange={(e) => handleSort(e.target.value )}
        /> Default</label>
      </form>
       
    )
}

export default Checkbox