import React from 'react'
import {Group, FormInputLabel, InputStyle} from  './form-input.styles';

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
        <InputStyle {...otherProps} />
        { label && (
            <FormInputLabel shrink={otherProps.value.length}> 
            {/* className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`} */}
            {label}
           </FormInputLabel>
        )}
 
    </Group>
  )
}

export default FormInput