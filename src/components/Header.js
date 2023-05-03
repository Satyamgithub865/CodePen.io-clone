import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
    background : #060606;
    height : 9vh;
`

const Header = () => {
  const logo = 'https://cdn4.iconfinder.com/data/icons/universal-glyph-circle/614/1001_-_Programming-512.png';

  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt="Compiler-logo" style={{width:'40px', backgroundColor:'black'}} />
        </Toolbar>
    </Container>
  )
}

export default Header
