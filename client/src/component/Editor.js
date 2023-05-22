import { useEffect } from 'react';
import { Box } from '@mui/material';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from '@emotion/styled';
import SidebarDoc from './Sidebar';
const Component = styled.div`
    background: 	#A9A9A9;`

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

const Editor = () => {

    useEffect(() => {
        const quill = new Quill('#editor', {
            modules: {
                // Equivalent to { toolbar: { container: '#toolbar' }}
                toolbar: toolbarOptions
            },
            theme: 'snow'
        })
    }, [])

    return (
        <>

            <Component >

                    <Box className='container' id="editor">

                    </Box>
            </Component>

        </>
    )
}

export default Editor; 