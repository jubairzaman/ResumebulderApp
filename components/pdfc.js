import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
    width: "30%",
    backgroundColor:"red"

  },

  section2: {
    width: "70%",
  }
});

// Create Document Component
const Pdfc = ({ cv }) => {

  return <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.mainContainer}>


        <View style={styles.section1}>
          <Text>{cv.firstName ?? ""}</Text>
        </View>
        <View style={styles.section2}>
          <Text>{cv.lastName ?? ""}</Text>
        </View>


      </View>

    </Page>
  </Document>
};

export default Pdfc;