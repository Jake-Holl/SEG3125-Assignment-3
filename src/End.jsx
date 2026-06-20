import { Link, useLocation } from 'react-router'
import { Box, Typography, Button } from '@mui/material'
import { useState } from 'react'

function End() {

    const state = useLocation().state
    const right = state.right.current
    const wrong = state.wrong.current
    const digits = state.digits
    const average = (60 / right).toFixed(2)

    const [shared, setShared] = useState('Share')

    const share = async () => {
        await navigator.clipboard.writeText(`I got ${right} in 1 minute on ${digits} difficulty on QuickMaths!\n${wrong} mistakes\n${average}s/answer`)
        setShared('Copied!')

        setTimeout(() => {
            setShared('Share')
        }, 3000);
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems:'center'}}>
            <Box sx={{borderBottom: '2px solid', borderColor: 'primary.main', minWidth:1}}>
                <Typography align='center' variant='h2' sx={{py:2, fontWeight:'bold'}}>QuickMaths</Typography>
            </Box>

            <Typography align='center' variant='h2' sx={{mt:10, py:2, fontWeight:'bold'}}>Good Job!</Typography>
            <Typography align='center' variant='h5' sx={{p:2}}>You got {right} in 1 minute on {digits} difficulty!</Typography>
            <Typography align='center' variant='h5' sx={{p:2}}>Mistakes: {wrong}</Typography>
            <Typography align='center' variant='h5' sx={{p:2}}>Avg. per question: {average} seconds</Typography>

            <Button color="secondary" component={Link} to="/" variant='contained' size='medium' sx={{minWidth:{xs:0.4, lg: 0.2}, borderRadius:10, mt:7}}>Play Again</Button>
            <Button onClick={share} color="secondary" variant='contained' size='medium' sx={{minWidth:{xs:0.4, lg: 0.2}, borderRadius:10, mt:7}}>{shared}</Button>
        </Box>
    )
}

export default End