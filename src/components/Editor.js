import React from 'react'
import '../App.css'
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

const Container = styled(Box)`
max-width:800px;
    flex-grow : 1;
    flex-basic : 0;
    display : flex;
    flex-direction : column;
    padding : 0 0.2rem;
`;

const Heading = styled(Box)`
    display:flex;
    background : #1d1e22;
    padding : 0.2rem;
    color : white;
`;

const Header = styled(Box)`
    display : flex;
    background : #060606;
    justify-content : space-between;
    color : white;
    font-weight : 700;
`;

const Editor = ({heading, icon, bg, value, onChange}) => {

  const [open, setOpen] = useState(true)

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    <Container style={ open ? null : {flexGrow : 0} }>
        <Header>
            <Heading>
                <Box component="span" style={{backgroundColor:`${bg}`, padding:'0.2rem', display:'flex', width:20, height:20, placeContent:'center', borderRadius:5, marginRight:10, color:'black'}}>{icon}</Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon onClick={()=> setOpen(prevState => !prevState)} style={{cursor:"pointer"}} />
        </Header>
        <ControlledEditor 
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: true,
                lineWrapping: true,
            }}
        />
    </Container>
  )
} 

export default Editor
