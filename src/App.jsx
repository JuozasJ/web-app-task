import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import Notifications from '@mui/icons-material/Notifications'
import Home from '@mui/icons-material/Home'
import InsertDriveFile from '@mui/icons-material/InsertDriveFile'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'

import './App.css'
import Upload from './Upload'

let fileList = [ /* Imitating file list from API */
  {
    id: 0,
    fileName: 'Name of the file.pdf',
    fileType: 'PDF',
    url: ""
  },
  {
    id: 1,
    fileName: 'Name of the file2.pdf',
    fileType: 'PDF',
    url: ""
  },
  {
    id: 2,
    fileName: 'Name of the file3.pdf',
    fileType: 'PDF',
    url: ""
  }
]


function App() {

  const [activeComponent, setActiveComponent] = React.useState("Upload")
  const [activeFileList, setActiveFileList] = React.useState([])

  React.useEffect(() => {
    if (fileList) {
      setActiveFileList(fileList)
    }
  }, [])

  function handleMenu(name) {
    setActiveComponent(name)
  }

  return (
    <div className="layout">
      <CssBaseline />
      <Stack sx={{marginRight: '30px'}}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1.5}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0.5}>
            <IconButton aria-label="language english">
              <div className="en">EN</div>
            </IconButton>
            <IconButton aria-label="Notifications">
              <Badge badgeContent={1} color="error">
                <Notifications fontSize="small" />
              </Badge>
            </IconButton>
          </Stack>
        <Avatar sx={{cursor: 'pointer'}} alt="User Name" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
      </Stack>
      <nav>
        <Stack spacing={0}>
          <button
          className={activeComponent==="Upload" ? 'menu-btn active' : 'menu-btn'}
          onClick={() => handleMenu('Upload')}
          >
            <Home sx={{marginRight: '20px', marginLeft: '15px'}} fontSize="small" />
            <span>Upload</span>
          </button>
          <button
          className={activeComponent==="Documents" ? 'menu-btn active' : 'menu-btn'}
          onClick={() => handleMenu('Documents')}
          >
            <InsertDriveFile sx={{marginRight: '20px', marginLeft: '15px'}} fontSize="small" />
            <span>Documents</span>
          </button>
          <button 
          className={activeComponent==="Inbox" ? 'menu-btn active' : 'menu-btn'} 
          onClick={() => handleMenu('Inbox')}
          >
            <li><span>Inbox</span></li>
          </button>
          <button 
          className={activeComponent==="Sent" ? 'menu-btn active' : 'menu-btn'} 
          onClick={() => handleMenu('Sent')}
          >
            <li><span>Sent</span></li>
          </button>
          <button 
          className={activeComponent==="Drafts" ? 'menu-btn active' : 'menu-btn'} 
          onClick={() => handleMenu('Drafts')}
          >
            <li><span>Drafts</span></li>
          </button>
        </Stack>
      </nav>
      <main>
        {activeComponent==="Upload" && <Upload activeFileList={activeFileList} />}
      </main>
    </div>
  )
}

export default App;
