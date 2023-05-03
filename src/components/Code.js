import React, {useContext} from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { DataContext } from '../Context/DataProvider'

const Container = styled(Box)`
    display : flex;
    background-color : #060606;
    height : 46vh;
`

const Code = () => {
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
        <Editor heading='HTML' icon="<>" bg="#FF3C41" value={html} onChange={setHtml} />
        <Editor heading='CSS' icon="#" bg="#0EBEFF" value={css} onChange={setCss} />
        <Editor heading='JS' icon="( )" bg="#FCD000" value={js} onChange={setJs} />
    </Container>
  )
}

export default Code
