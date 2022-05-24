import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import BarChart from '../Charts/BarChart';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c5cae9',
    },
  },
});

export default function Cards(props){
const [countries, setCountries] = useState(["Active Cases", "Recover Cases", "Deaths"])

console.log(props.data)




  return (<div>

    <ThemeProvider theme={darkTheme}>

      <Box
        sx={{


          padding: "30px",
          marginRight: "20px",
          float: "right",
          display: 'flex',
          flexDirection: "column",
          flexWrap: 'wrap',
          '& > :not(style)': {
            backgroundColor: "#343538",
            marginLeft: "5px",
            m: 3,
            width: 150,
            height: 120,
          },
          root: {
            marginLeft: "5px",
          }
        }}
      >
        <Paper>
            <div className="one">
              <h6>{countries[0]}</h6>
            {props.data.confirmed.value}
            </div>
          </Paper>
          <Paper>
            <div className="one">
              <h6>{countries[1]}</h6>
            {props.data.recovered.value}
            </div>
          </Paper>
          <Paper>
            <div className="one">
              <h6>{countries[2]}</h6>
            {props.data.deaths.value}
            </div>
          </Paper>


      </Box>
    </ThemeProvider>
  </div>
  );
}