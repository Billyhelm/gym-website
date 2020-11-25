import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import SortPrice from './../../../SortFunctions/index'

const Gender = ({ children, ...otherProps }) => {

    const {handleGender} = otherProps

    return (

        <form>
            <h2>Filter By Gender</h2>
        <label><input
          type="radio"
          name="sort"
          value="F"
          onChange={(e) => handleGender(e.target.value)}
        /> Female</label><br/>
        <label><input
          type="radio"
          name="sort"
          value="M"
          onChange={(e) => handleGender(e.target.value )}
        /> Male</label><br/>
        <label><input
          type="radio"
          name="sort"
          value=""
          onChange={(e) => handleGender(e.target.value )}
        /> Both</label>
      </form>
       
    )
}

export default Gender