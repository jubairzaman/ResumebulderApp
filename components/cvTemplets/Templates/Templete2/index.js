import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';
import Jumbotron from '../../jumbotron';
import { Mobile } from '../../icons/mobile';
import { Call } from '../../icons/call';
import { Mail } from '../../icons/mail';
import CvProgressBar2 from './cvProgressbar2';
import LanguageProgressBar2 from './LanguageProgressBar2';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',

  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },

  mainContainer: {
    flexDirection: 'row',
  },

  section1: {
    padding: "15px",
    width: "38%",
    backgroundColor: "rgb(245,245,245)"
  },

  section2: {
    width: "70%",

  },

  textName: {
    fontSize: "20px",
    color: 'white'
  },

  textSmall: {
    fontSize: "10px",
    color: 'white'
  },

  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },

  justifyContentCenter: {
    justifyContent: "center",
  },

  alignItemsCenter: {
    alignItems: "center",
  },

  textCenter: {
    textAlign: "center"
  },

  wFull: {
    width: "100%"
  },
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
  justifyBetween: {
    justifyContent: "between",
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
    flex: "0 0 41.666667%",
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

// Create Document Component
const Template2 = ({ cv, heading, content }) => {
  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.mainContainer}>


        <View style={styles.row}>

          <View style={styles.col7}>
            <Text>sdsdsd sdsdsd sdsdsd sdsdsd sdsdsd </Text>
          </View>

          <View style={{...styles.col5,...{borderLeft:"1px solid red",}}}>


            <View style={{"position":"relative", padding:"15px", backgroundColor:"blue"}}>

              <View style={{borderRadius:"50%", position:"absolute", width:"60px", height:"60px", backgroundColor:"red", left: "-15%", top:"50%",transform:"translateY(-15%)" }}></View>
              {/* Info Container */}
              <View style={{paddingLeft:"30px"}}>
                <Text>sdsdsd  </Text>
                <Text>sdsdsd  </Text>
                <Text>sdsdsd  </Text>
                <Text>sdsdsd  </Text>
                <Text>sdsdsd  </Text>
                <Text>sdsdsd  </Text>
                <Text>sdsdsd  </Text>
              </View>
            </View>




            
            
          </View>

        </View>

      </View>

    </Page>
  </Document>
};

export default Template2;