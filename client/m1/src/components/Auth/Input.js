import React from 'react'
import { TextField ,Grid,InputAdornment,IconButton, Icon} from '@material-ui/core'
import {Visibility,VisibilityOff} from '@material-ui/icons'
const Input = ({ name, half, handleChange,label,autoFocus,type ,handleShowPassword}) => {
  return (
    <div>
      <Grid item xs={12} sm={half ?6 :12}>
        <TextField
        name={name}
        onChange={handleChange}
        label={label}
        variant="outlined"
        autoFocus={autoFocus}
        type={type}
        required fullWidth 
        InputProps={(name==='password') && {
            endAdornment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type==="Password"?<Visibility/>:<VisibilityOff/>}
                    </IconButton>

                </InputAdornment>
            ),
        }}
        >

        </TextField>
      </Grid>
    </div>
  )
}

export default Input
