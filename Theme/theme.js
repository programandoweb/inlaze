'use client'
import { createTheme } from '@mui/material/styles';
import {  grey , yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: grey[800],
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  }, 
  components: {
    MuiTypography:{
      variants:[
        {
          props:{ variant: 'body2'},
          style:{
            fontSize:14,
            lineHeight:1.5,
            height:60,
            display:"block"
          }
        }
      ],
    },
    MuiTypography:{
      variants: [
        {
          props: { variant: 'title' },
          style: {
            fontSize:13,
            display:"block",
            fontWeight:"bold",
          },
        },
        {
          props: { variant: 'subheader' },
          style: {
            display:"block",
            fontSize:12,
          },
        },
      ],
    },
    MuiAppBar: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            color:"#fff",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white', // Establecer el fondo blanco
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { size: 'large' }, // or 'medium', 'small', etc.
          style: {
            textTransform:"none",
            paddingRight:40,
            paddingLeft:40,
            fontSize: '1rem', // Adjust the font size as needed
            // You can also adjust other styles here
          },
        },
      ],
    },
    MuiGrid: {
      variants: [
        {
          props: { variant: 'menuDinamic' },
          style: {
            height:"70vh",
            backgroundColor:grey[800],
            padding:16,
            alignContent:"center",
            borderRadius:14,
          },
        },
        {
          props: { variant: 'round' },
          style: {
            backgroundColor:yellow[800],
            width:10,
            height:10,
            borderRadius:10
          },
        },
        {
          props: { variant: 'middle' },
          style: {
            flex:1,
            justifyContent:"center",
            alignItems:"center",            
          },
        },
        {
          props: { variant: 'menu' },
          style: {
            minHeight:"100vh",
            padding:16,
            alignContent:"center"
          },
        },
        {
          props: { variant: 'main' },
          style: {
            minHeight:"100vh",
            backgroundColor:grey[100],
          },
        },
        {
          props: { variant: 'homeMain' },
          style: {
            minHeight:"100vh",
          },
        },
        {
          props: { variant: 'loading' },
          style: {
            height:"100vh",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            background:yellow[500],
          },
        },
        {
          props: { variant: 'footer' },
          style: {
            color:"#fff",
            minHeight:100,
          },
        },
        {
          props: { variant: 'appbar' },
          style: {
            background:grey[800],
            marginTop:16,
            borderRadius:14,
            marginRight:20,
          },
        },
        {
          props: { variant: 'form' },
          style: {
            paddingTop:20,
            marginTop:16,            
          },
        },
        {
          props: { variant: 'dashboardMain' },
          style: {
            marginTop:6,
            borderRadius:14,
            /*marginRight:20,*/
          },
        },
      ],
    },
  }
});

export default theme;
