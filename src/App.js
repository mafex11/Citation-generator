import React, { useState } from 'react';
import { Button, Popover, Typography, TextField, MenuItem } from '@mui/material';
import './App.css';

const citationStyles = [
  { value: 'apa', label: 'APA' },
  { value: 'mla', label: 'MLA' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'ieee', label: 'IEEE' },
  { value: 'harvard', label: 'Harvard' },
];

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [citationStyle, setCitationStyle] = useState('');
  const [inputText, setInputText] = useState('');
  const [citationText, setCitationText] = useState('');

  const handleOpenPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  const handleGenerateCitation = () => {
    const generatedCitation = `Generated citation in ${citationStyle} style: ${inputText}`;
    setCitationText(generatedCitation);
  };

  return (
    <div className="app">


      <div className="popup-container">
        <Button onClick={handleOpenPopup}>Citations</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClosePopup}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'bottom',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'bottom',
          }}
        >

          <div className="popup-content">

            <Typography variant="h6">Generate Citations</Typography>
            <TextField
              select
              label="Citation Style"
              value={citationStyle}
              onChange={(e) => setCitationStyle(e.target.value)}
              fullWidth
            >
              {citationStyles.map((style) => (
                <MenuItem key={style.value} value={style.value}>
                  {style.label}
                </MenuItem>
              ))}


            </TextField>

            <Button onClick={handleGenerateCitation} variant="contained" color="primary">
              Generate Citation
            </Button>

            {citationText && (
              <Typography variant="body1" className="citation-text">
                {citationText}
              </Typography>

              
            )}
          </div>
        </Popover>
      </div>

      <div className="input-container">
        <TextField
          label="Input Text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          fullWidth
          multiline
          rows={4}
        />
      </div>
    </div>
  );
}

export default App;
