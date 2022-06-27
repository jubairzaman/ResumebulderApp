import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import CvProgressBar from './cvTemplets/cvProgressbar';
import Jumbotron from './cvTemplets/jumbotron';
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
    backgroundColor: "rgb(12 74 110)"
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
  }
});

// Create Document Component
const Pdfc = ({ cv }) => {

  return <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.mainContainer}>


        <View style={{ ...styles.section1, ...styles.row, ...styles.column, ...styles.alignItemsCenter }}>

          <View style={{ ...styles.justifyContentCenter, ...styles.row }}>
            <Text style={styles.textName}>{cv.firstName?.toUpperCase() ?? ""}</Text>
            <View style={{ height: "10px", width: "10px" }}></View>
            <Text style={styles.textName}>{cv.lastName?.toUpperCase() ?? ""}</Text>
          </View>
          <View style={{ height: "20px", width: "10px" }}></View>
          <Text style={{ ...styles.textSmall, ...styles.textCenter }}>{cv.email?.toUpperCase() ?? ""}</Text>

          <View style={{ height: "20px", width: "10px" }}></View>

          <View style={{ width: "100%", }}>
            <Text style={{ color: "white" }}>Skills</Text>
          </View>

          {

            Object.keys(cv.skills ?? []).map((key) => {
              return <CvProgressBar skillName={key} value={cv.skills[key]} />
            })
          }



        </View>

        <View style={styles.section2}>
          <Jumbotron />
          <Jumbotron />
          <Jumbotron />
        </View>


      </View>

    </Page>
  </Document>
};

export default Pdfc;