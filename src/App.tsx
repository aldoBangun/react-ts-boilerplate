import React from 'react'
import Button from '@mui/material/Button'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'

const App: React.FC = () => {
  return (
    <div>
      <Button
        startIcon={<SettingsOutlined />}
        variant="outlined"
        color="secondary"
      >
        Settings
      </Button>
      <Button
        variant="text"
      >
        Logout
      </Button>
    </div>
  )
}

export default App
