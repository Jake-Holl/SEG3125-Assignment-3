import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Start from './Start.jsx'
import End from './End.jsx'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#D9D9D9',
          right: '#40C057',
          wrong: '#FE0103'
        },
        secondary: {
          main: '#000000',
          light: '#fff'
        }
        }
    },
    dark: {
      palette: {
        primary: {
          main: '#818384',
          right: '#40C057',
          wrong: '#FE0103'
        },
        secondary: {
          main: '#fff',
          light: '#000'
        }
    }
  }
},
  typography: {
    fontFamily: [
      'IBM Plex Mono'
    ],
    h1: {
      fontSize: '2.5rem', // Default (Mobile/xs)
      '@media (min-width:600px)': {
        fontSize: '4rem', // Tablet (sm)
      },
      '@media (min-width:960px)': {
        fontSize: '5rem', // Desktop (md and up)
      },
    },
    h2: {
      fontSize: '1.75rem', // Default (Mobile/xs)
      '@media (min-width:600px)': {
        fontSize: '2.75rem', // Tablet (sm)
      },
      '@media (min-width:960px)': {
        fontSize: '3.75rem', // Desktop (md and up)
      },
    }
  }
})


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} defaultMode='light'>
    <CssBaseline />
    <BrowserRouter>
        <Routes>
          <Route path='/play' element={<App />} />
          <Route path='/' element={<Start />} />
          <Route path='/end' element={<End />} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
)
