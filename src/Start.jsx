import { Link } from 'react-router'
import { useState } from 'react'
import { Button, Typography, Box, ToggleButton, ToggleButtonGroup, useColorScheme, Switch, FormControlLabel } from '@mui/material'

function Start() {

    const {mode, setMode} = useColorScheme()

    const [digits, setDigits] = useState(1)

    const handleChange = (event, newValue) => {
        setDigits(newValue)
    }

    const handleChangeMode = (event) => {
        setMode(event.target.checked ? 'dark' : 'light')
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems:'center'}}>
            <Box sx={{mt:20, maxWidth:{xs:0.15, md: 0.2, lg:0.075, xl:0.06}}} component='img' src='/logo.png' />
            <Typography align='center' variant='h1' sx={{fontWeight:'bold', mt:5}} >QuickMaths</Typography>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', my:10, minWidth:{xs:0.4, lg: 0.2}}}>
                <Typography sx={{mr: 'auto', pl:3}}>Digits</Typography>
                <ToggleButtonGroup value={digits} exclusive onChange={handleChange} size='small' sx={{minWidth:1, display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <ToggleButton sx={{borderRadius:10, minWidth:'33%', borderColor:'secondary.main', color:'secondary.main', '&.Mui-selected': {backgroundColor:'secondary.main', color:'secondary.light'}, '&.Mui-selected:hover': {backgroundColor:'secondary.main', color:'secondary.light'}}} value={1}>1</ToggleButton>
                    <ToggleButton sx={{borderRadius:10, minWidth:'33%', borderColor:'secondary.main', color:'secondary.main', '&.Mui-selected': {backgroundColor:'secondary.main', color:'secondary.light'}, '&.Mui-selected:hover': {backgroundColor:'secondary.main', color:'secondary.light'}}} value={2}>2</ToggleButton>
                    <ToggleButton sx={{borderRadius:10, minWidth:'33%', borderColor:'secondary.main', color:'secondary.main', '&.Mui-selected': {backgroundColor:'secondary.main', color:'secondary.light'}, '&.Mui-selected:hover': {backgroundColor:'secondary.main', color:'secondary.light'}}} value={3}>3</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Button color="secondary" component={Link} to="/play" state={digits} variant='contained' size='medium' sx={{minWidth:{xs:0.4, lg: 0.2}, borderRadius:10, mb:5}}>Play</Button>
            <FormControlLabel control={<Switch checked={mode === 'dark'} onChange={handleChangeMode}/>} label='Dark Mode'labelPlacement='bottom'/>
        </Box>
    )
}

export default Start