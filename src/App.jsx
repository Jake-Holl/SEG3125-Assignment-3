import { Button, Grid, Box, Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router'

function App() {

  const [question, setQuestion] = useState('')
  const [displayquestion, setDisplayQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [right, setRight] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [answercolor, setAnswerColor] = useState('primary.main')
  const digits = useLocation().state || 1
  const [timer, setTimer] = useState('00')
  let seconds = 0

  function generateQuestion() {
    const max = 10 ** digits
    const one = Math.floor(Math.random() * max)
    const two = Math.floor(Math.random() * max)
    setQuestion(one + ' + ' + two)
    setDisplayQuestion(one + ' + ' + two)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayQuestion('')
    }, 2000 * (digits ** 1.3))
    return () => {clearTimeout(timer)}
  }, [question])

  const typed = (event) => {
    if (event.key != ' ' && isFinite(event.key)){
      setAnswer(prev => prev + event.key)
    } else if (event.key === "Backspace"){
      setAnswer(prev => prev.slice(0, -1))
    } else if (event.key === "Enter"){
      submitAnswer()
    }
  }
  
  const navigate = useNavigate()

  const rightRef = useRef(right)
  const wrongRef = useRef(wrong)

  useEffect(() => {
    rightRef.current = right
  }, [right])

  useEffect(() => {
    wrongRef.current = wrong
  }, [wrong])


  useEffect(() => {
    generateQuestion()
    setInterval(() => {
      seconds++
      if(seconds == 60){
        navigate('/end', {state:{right: rightRef, wrong: wrongRef, digits: digits}})
      }
      let mod = 0
      if(seconds < 10){
        mod = '0' + seconds
      } else{
        mod = seconds
      }
    
    setTimer(mod)
  }, 1000)
  }, [])  

  useEffect(() => {
    window.addEventListener('keydown', typed)

    return () => {
      window.removeEventListener('keydown', typed)
    }
  }, [answer])

  const Clicked = (event) => {
    if (event.currentTarget.textContent == '⌫'){
      setAnswer(prev => prev.slice(0, -1))
    } else if (event.currentTarget.textContent == 'ENTER'){
      submitAnswer()
    } else {
      setAnswer(prev => prev + event.currentTarget.textContent)
    }
  }

  function submitAnswer(){
    if(answer != ''){
      if(answer == eval(question)){
        setAnswer('')
        generateQuestion()
        setRight(prev => prev + 1)
        setAnswerColor('primary.right')
      } else {
        setAnswer('')
        setWrong(prev => prev + 1)
        setAnswerColor('primary.wrong')
      }
    }
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems:'center'}}>

      <Box sx={{borderBottom: '2px solid', borderColor: 'primary.main', minWidth:1}}>
        <Typography align='center' variant='h2' sx={{py:2, fontWeight:'bold'}}>QuickMaths</Typography>
      </Box>

      <Typography variant='h5' sx={{mt:2}}>Difficulty: {digits}</Typography>
      <Typography variant='h5'>Right {right} | {wrong} Wrong</Typography>
      <Typography variant='h5'>{timer}</Typography>

      <Box sx={{mt:6, minWidth:{xs:0.4, md:0.2, lg: 0.1}, minHeight:'4.5rem', bgcolor:'primary.main', borderRadius:3, p:2}}>
          <Typography sx={{fontSize: '1.5rem', fontWeight:'bold'}} align='center'>{displayquestion}</Typography>
      </Box>

      <Box sx={{mt:'auto', minWidth:{xs:0.4, md:0.2, lg: 0.1}, minHeight:'4.5rem'}}>
        <Typography sx={{pl:1}}>Answer</Typography>
        <Box sx={{ bgcolor:answercolor, borderRadius:3, p:2, minHeight:'4.5rem'}}>
          <Typography sx={{fontSize: '1.5rem', fontWeight:'bold'}} align='center'>{answer}</Typography>
        </Box>
      </Box>

      <Grid container spacing={1} sx={{mt: 'auto', p:4, maxWidth: 430}}>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>1</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>2</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>3</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>4</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>5</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>6</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>7</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>8</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>9</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>ENTER</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>0</Button>
        </Grid>
        <Grid size={4}>
          <Button sx={{fontSize: '1.5rem' , fontWeight: 'bold'}} size='small' fullWidth variant="contained" onClick={Clicked}>⌫</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
