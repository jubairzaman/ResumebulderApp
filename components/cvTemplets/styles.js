import {  StyleSheet } from '@react-pdf/renderer';
const Styles = StyleSheet.create({

    flex: {
      display: 'flex',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: "row"
    },
    fRow: {
      flexDirection: 'row'
    },
    fColumn: {
      flexDirection: 'column'
    },
  
    justifyStart: {
      justifyContent: "flex-start",
    },
    justifyCenter: {
      justifyContent: "center",
    },
    justifyEnd: {
      justifyContent: "flex-end"
    },
  
    alignStart: {
      alignItems: 'flex-start'
    },
  
    alignCenter: {
      alignItems: "center",
    },
    alignEnd: {
      alignItems: 'flex-end'
    },

    flexCentered:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
  
    col1: {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
    col2: {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
    col3: {
      flex: "0 0 25%",
      maxWidth: "25%",
    },
    col4: {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
    col5: {
      flex: "0 0 0 0 41.666667%",
      maxWidth: "0 0 41.666667%",
    },
    col6: {
      flex: "0 0 50%",
      maxWidth: "50%",
    },
    col7: {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
    col8: {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
    col9: {
      flex: "0 0 75%",
      maxWidth: "75%",
    },
    col10: {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
    col11: {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
    col12: {
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  });

  export default Styles;