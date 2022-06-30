import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';
import CvProgressBar from './cvTemplets/cvProgressbar';
import Jumbotron from './cvTemplets/jumbotron';
import { Mobile } from './cvTemplets/icons/mobile';
import { Call } from './cvTemplets/icons/call';
import { Mail } from './cvTemplets/icons/mail';
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
const Pdfc = ({ cv }) => {
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


        <View style={{ ...styles.section1, ...styles.row, ...styles.column, ...styles.alignItemsCenter }}>
          <View style={styles.col}  >
            <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fColumn }}>
              <Image style={{ width: "100px", height: "100px" }} src={(cv.profileImage != null && cv.profileImage !== "") ? cv.profileImage : "/cvpimg.png"} alt="Profile Image"></Image>
            </View>
            <View style={{ ...styles.justifyCenter, }}>
              <Text style={{ fontSize: "30px", color: "#fff" }}>{valueText(cv.firstName, "First Name")} {valueText(cv.lastName, "Last Name")}</Text>

              <Text style={{ fontSize: "10px", color: "#fff" }}>{valueText(cv.profession, "Job Title")}</Text>
            </View>
          </View>
          <View >


            <View style={{ ...styles.col4, ...styles.justifyCenter, ...{ paddingLeft: '', } }}>

              <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "6px" } }}>
                <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
                  <Mobile />
                  <Text style={{ fontSize: "10px", paddingLeft: "12px" }}>{cv.phone ?? "Phone Number"}</Text>
                </View>
              </View>

              {/* personal phone email section  */}

              <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "6px" } }}>
                <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
                  <Call />
                  <Text style={{ fontSize: "10px", paddingLeft: "12px" }}>{cv.email ?? "Email"}</Text>
                </View>
              </View>

              <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "6px" } }}>
                <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
                  <Mail />
                  <Text style={{ fontSize: "10px", paddingLeft: "12px" }}>{cv.city ?? "Address"}</Text>
                </View>
              </View>
            </View>
            {
              Object.keys(cv.skills ?? []).map((key) => {
                return <CvProgressBar key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
              })
            }
          </View>



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