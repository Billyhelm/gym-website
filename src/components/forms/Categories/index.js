import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import SortPrice from './../../../SortFunctions/index'

const Categories = ({ children, ...otherProps }) => {

    const {handleFilter} = otherProps

    return (

        <form>
            <h2>Filter By Category</h2>
        <label><input
          type="radio"
          name="filter"
          value="tank"
          onChange={(e) => handleFilter(e.target.value)}
        /> Tanks</label>
        <br />
        <label><input
          type="radio"
          name="filter"
          value="tee"
          onChange={(e) => handleFilter(e.target.value )}
        /> Tees</label>
        <br />
        <label><input
          type="radio"
          name="filter"
          value="jacket"
          onChange={(e) => handleFilter(e.target.value )}
        /> Jackets</label>
        <br/>
        <label><input
          type="radio"
          name="filter"
          value="accesory"
          onChange={(e) => handleFilter(e.target.value )}
        /> Accesories</label>
        <br/>
        <label><input
          type="radio"
          name="filter"
          value=""
          onChange={(e) => handleFilter(e.target.value )}
        /> All</label>

      </form>
       
    )
}

export default Categories