import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import SortPrice from './../../../SortFunctions/index'

const Checkbox = ({ children, ...otherProps }) => {

    const {handleGym} = otherProps

    return (

        <form>
            <h2>Filter By Gym</h2>
        <label><input
          type="radio"
          name="sort"
          value="F45 Midtown"
          onChange={(e) => handleGym(e.target.value)}
        /> Midtown</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value="F45 Kelliwood"
          onChange={(e) => handleGym(e.target.value )}
        /> Kelliwood</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value="F45 Cinco Ranch"
          onChange={(e) => handleGym(e.target.value )}
        /> Cinco</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value=""
          onChange={(e) => handleGym(e.target.value )}
        /> All Gyms</label>
      </form>
       
    )
}

export default Checkbox