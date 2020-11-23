import React from 'react'
import './styles.scss'

const FormSelect = ({ handleChange, label, options, ...otherProps }) => {
    return (
        <div className='formRow' >
            {label && (
                <label>
                    {label}
                </label>
            )}
            <br/>
            <select 
            className='formSubmit'
            onChange={handleChange}
            defaultValue=""
            {...otherProps} >
                <option hidden value=''>Choose One</option>
            {options.map(sentence => {
                return(
                    <option value={`${sentence}`}>{sentence}</option>
                )}
                )}
           </select>
        </div>
    )
}

export default FormSelect