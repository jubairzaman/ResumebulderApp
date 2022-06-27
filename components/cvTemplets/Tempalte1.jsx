import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';
import CvProgressBar from './cvProgressbar';
import Jumbotron from './jumbotron';
import { Mobile } from './icons/mobile';
import { Call } from './icons/call';
import { Mail } from './icons/mail';
// Create styles
const styles = StyleSheet.create({

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

// Create Document Component
const Tempalte1 = ({ cv }) => {

  return <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.col8}>

          <View style={styles.row}>
            <View style={{ ...styles.col6, ...styles.flex, ...styles.justifyEnd, ...styles.fRow }}>
              <Image style={{ width: "120px", height: "120px" }} src="/mk1.png"></Image>
            </View>
            <View style={{ ...styles.col6, ...styles.justifyCenter, ...{ paddingLeft: '24px' } }}>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </View>
          </View>

        </View>

        <View style={{ ...styles.col4, ...styles.justifyCenter, ...{ paddingLeft: '24px' } }}>

        <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fRow }}>
            <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter,}}>
              <Mobile/>
              <Text style={{fontSize:"10px"}}>Phone Number</Text>
            </View>
          </View>

          <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fRow }}>
            <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter,}}>
              <Call/>
              <Text style={{fontSize:"10px"}}>Phone Number</Text>
            </View>
          </View>

          <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fRow }}>
            <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter,}}>
              <Mail/>
              <Text style={{fontSize:"10px"}}>Phone Number</Text>
            </View>
          </View>


        </View>


      </View>
    </Page>
  </Document>
};

export default Tempalte1;