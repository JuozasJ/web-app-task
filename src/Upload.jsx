import {useState, useEffect} from 'react'

import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

import FileImg from "./assets/file.png"

function Upload({activeFileList}) {

    const [filesArray, setFilesArray] = useState([])
    const [uploadCardOpen, setUploadCardOpen] = useState(true)
    const [previewCardOpen, setPreviewCardOpen] = useState(true)

    useEffect(() => {
        if (activeFileList !== []) {
            setFilesArray(activeFileList)
        }
    }, [activeFileList])

    function toggleUpload() {
        setUploadCardOpen(prevState => !prevState)
    }

    function togglePreview() {
        setPreviewCardOpen(prevState => !prevState)
    }
    
    const filesArrayElements = filesArray.map(file => (
        <div 
            style={{padding: '10px', 
            borderRadius: '5px', 
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            margin: '5px 0',
            width: '70%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis' }} 
            key={file.id} 
            >
            {file.fileName}
        </div>
    ))

    return (
        <div className="main-component">
           <Grid px={3} spacing={3.5} container>
            <Grid item xs={12} sm={12} md={4.5}>
                <Stack spacing={1.5}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="body2" sx={{marginTop: '-11px'}}>
                                Type of Document
                            </Typography>
                            <RadioGroup
                                defaultValue="pdf"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="pdf" control={<Radio size="small" sx={{color: "#637381", '&.Mui-checked': {color: '#9c2498'}}} />} label="PDF" />
                                <FormControlLabel value="other" control={<Radio size="small" sx={{color: "#637381", '&.Mui-checked': {color: '#9c2498'}}} />} label="Other formats" />
                            </RadioGroup>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="body2" sx={{marginTop: '-11px'}}>
                                List of uploads
                            </Typography>
                            {filesArrayElements}
                            <a href="#" style={{float: 'right', color: '#637381'}}>Clear all</a>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7.5}>
                <Stack spacing={1.5}>
                    <Card sx={{borderRadius: '10px'}}>
                        {uploadCardOpen ?
                        <CardContent>
                            <ExpandMoreIcon onClick={toggleUpload} sx={{marginTop: '-7px', float: 'right', cursor: 'pointer', transform: 'rotate(180deg)'}}/>
                            <Typography variant="h6" mt={2} sx={{textAlign: 'center'}}>
                                Select files
                            </Typography>
                            <Typography variant="body2" mt={1} sx={{textAlign: 'center'}}>
                                Drop files here or click <a href="#">browse</a>
                            </Typography>
                            <img src={FileImg} alt="Image of file" style={{display: 'grid', width: '20vw', margin: '50px auto'}} />
                        </CardContent> :
                        <CardContent onClick={toggleUpload} sx={{cursor: 'pointer', width: '100%', height: '100%',}}>
                            <Typography variant="body2" fontWeight={500} sx={{marginTop: '-5px', position: 'absolute'}}>
                                Select more files for upload
                            </Typography>
                            <ExpandMoreIcon sx={{marginTop: '-7px', float: 'right', cursor: 'pointer'}}/>
                        </CardContent>}
                    </Card>
                    <Card sx={{borderRadius: '10px'}}>
                        {previewCardOpen ?
                        <CardContent>
                            <Typography variant="subtitle1" mt={1} sx={{textAlign: 'center', color: '#abb4bb'}}>
                                Name of the file.pdf
                            </Typography>
                            <div style={{backgroundColor: '#e5e8eb', width: '95%', height: '400px', margin: ' 10px auto', borderRadius: '10px'}}></div>
                            <ExpandMoreIcon onClick={togglePreview} sx={{marginTop: '-7px', float: 'right', cursor: 'pointer', transform: 'rotate(180deg)'}}/>
                            </CardContent> :
                        <CardContent onClick={togglePreview} sx={{cursor: 'pointer', width: '100%', height: '100%',}}>
                            <Typography variant="body2" fontWeight={500} sx={{marginTop: '-5px', position: 'absolute'}}>
                                Preview uploaded files
                            </Typography>
                            <ExpandMoreIcon sx={{marginTop: '-7px', float: 'right', cursor: 'pointer'}}/>
                        </CardContent>}
                    </Card>
                </Stack>
            </Grid>
           </Grid>
        </div>
    )
}

export default Upload;
