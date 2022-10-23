import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';


import { BlueDot } from '../../icons/BlueDot';
import CvProgressbar91 from './CvProgressbar8';
import LanguageProgressBar91 from './LanguageProgressBar8';
import { display } from '@mui/system';
import { Dot } from '../../icons/Dot';
import { Call } from '../../icons/call';
import { Mail } from '../../icons/mail';
import { Address } from '../../icons/address';


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
    backgroundColor: "rgb(255,255,255)"
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
const Tempalte9 = ({ cv, heading, content }) => {
  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>

      <View style={{ ...styles.flex, ...styles.fColumn, ...{ padding: "30px" } }}>

        <View style={{ ...styles.justifyCenter, ...{ paddingBottom: "40px", paddingTop: "10px" } }}>
          <Text style={{ fontSize: "25px", color: "#000" }}>{valueText(cv.firstName, "First Name")} <Text style={{ fontSize: "20px", color: "#000" }}>{valueText(cv.lastName, "Last Name")}</Text></Text>


          <Text style={{ fontSize: "10px", color: "#000000", marginLeft: "2px", marginTop: "7px" }}>{valueText(cv.profession, "Job Title")}</Text>
        </View>


        <View >
          <View style={{ ...styles.row }}>
            <View style={{ ...styles.col3, ...styles.flex, ...styles.fColumn, ...styles.justifyEnd }}>

              <View style={{ ...{ marginTop: "15px" } }} wrap={false}>



                <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
                  <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                    <Text style={{ fontSize: "10px", color: "#000000" }}> <Call /> {cv.phone ?? "Phone Number"}</Text>
                  </View>
                </View>


                <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
                  <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                    <Text style={{ fontSize: "10px", color: "#000000" }}> <Mail /> {cv.email ?? "Email"}</Text>
                  </View>
                </View>

                <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
                  <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                    <Text style={{ fontSize: "10px", color: "#000000" }}> <Address /> {cv.city ?? "Address"}</Text>
                  </View>
                </View>
              </View>

            </View>
            <View style={{ ...styles.col9 }}>
              <View style={{ ...styles.row, ...{ paddingBottom: "10px" } }}>
                <View style={{ ...styles.col3, ...styles.flex, ...styles.fColumn, ...styles.justifyStart }}>
                  <View style={{ ...{ position: 'relative' } }}>

                    <View style={{ ...{ backgroundColor: "#00FFF0" } }}>
                      <Text style={{ color: "#00FFF0" }}>Experince</Text>
                    </View>

                    <View style={{ ...{ position: 'absolute', top: "-5px", left: "-5px", backgroundColor: "#000", width: "100%", padding: "2px" } }}>
                      <Text style={{ ...{ color: "#fff" } }} >Experince</Text>
                    </View>

                  </View>
                </View>
                <View style={{ ...styles.col9 }}>

                  <View style={{ paddingLeft: "30px" }}>


                    <View style={{ width: '100%', }}>

                      <View>
                        {
                          Object.keys(cv.experiences ?? []).map((key) => {
                            let exp = cv.experiences[key];
                            return <>
                              <View style={{ ...styles.flex, ...styles.fRow }}>
                                <View style={{ marginLeft: "5px" }}>

                                </View>
                                <View style={{ marginLeft: "5px" }}>
                                  <View style={{ ...{ marginTop: "5px" } }}>


                                    <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px", color: "#000" } }}>{valueText(exp.jobTitle, "Job Title")} </Text>
                                    <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px" } }}>At {valueText(exp.employer, "Companey Name")},{valueText(exp.address, "Job Address")}</Text>
                                    <hr></hr>
                                    <View style={{}}>

                                      <Text style={{ ...{ fontSize: "8px" } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                                      <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(exp.address, "Your Job Address Here")}</Text>
                                    </View>
                                  </View>
                                  <View style={{}}>
                                    <Text style={{ ...{ fontSize: "10px", paddingTop: "3px", color: "#AFAFAF" } }}>{valueText(exp.description, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
                                  </View>
                                </View>
                              </View>
                            </>
                          })
                        }
                      </View>
                    </View>
                  </View>
                </View>
              </View>




              <View style={{ ...styles.row, ...{ borderTop: "1px solid #000", paddingTop: "20px", paddingBottom: "10px" } }}>
                <View style={{ ...styles.col3, ...styles.flex, ...styles.fColumn, ...styles.justifyStart }}>
                  <View style={{ ...{ position: 'relative' } }}>

                    <View style={{ ...{ backgroundColor: "#FFF500", width: "50%" } }}>
                      <Text style={{ color: "#FFF500" }}>Skills</Text>
                    </View>

                    <View style={{ ...{ position: 'absolute', top: "-5px", left: "-5px", backgroundColor: "#000", width: "50%", padding: "2px" } }}>
                      <Text style={{ ...{ color: "#fff" } }} >Skills</Text>
                    </View>

                  </View>
                </View>
                <View style={{ ...styles.col9 }}>

                  <View style={{ ...{ marginLeft: "40px" } }} >
                    <View>

                      {
                        Object.keys(cv.skills ?? []).map((key) => {
                          return <CvProgressbar91 key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                        })
                      }
                    </View>

                  </View>


                </View>



              </View>






              <View style={{ ...styles.row, ...{ borderTop: "1px solid #000", paddingTop: "20px" } }}>
                <View style={{ ...styles.col3, ...styles.flex, ...styles.fColumn, ...styles.justifyStart }}>
                  <View style={{ ...{ position: 'relative' } }}>

                    <View style={{ ...{ backgroundColor: "#54FF00" } }}>
                      <Text style={{ color: "#54FF00" }}>Education</Text>
                    </View>

                    <View style={{ ...{ position: 'absolute', top: "-5px", left: "-5px", backgroundColor: "#000", width: "100%", padding: "2px" } }}>
                      <Text style={{ ...{ color: "#fff" } }} >Education</Text>
                    </View>

                  </View>
                </View>
                <View style={{ ...styles.col9 }}>

                  <View style={{ paddingLeft: "30px" }}>


                    <View style={{ width: '100%', }}>

                      <View>
                        {
                          Object.keys(cv.education ?? []).map((key) => {
                            let edu = cv.education[key];
                            return <View wrap={false}>
                              <View style={{ ...styles.flex, ...styles.fRow }}>
                                <View style={{ marginTop: "10px", marginLeft: "10px" }}>

                                </View>
                                <View >
                                  <View style={{ ...{ marginTop: "10px" } }}>
                                    <Text style={{ ...{ fontSize: "12px" } }}>{valueText(edu.startdate, "Start Date")}- {valueText(edu.enddate, "End Date")}</Text>
                                    <hr></hr>
                                    <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px" } }}>{valueText(edu.degree, "Degree")} At {valueText(edu.school, "School Name")},{valueText(edu.address, "School Address")}</Text>

                                    {/* <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(exp.address,"Your Job Address Here")}</Text> */}
                                  </View>
                                  <View style={{}}>
                                    <Text style={{ ...{ fontSize: "10px", paddingTop: "3px", color: "#AFAFAF" } }}>{valueText(edu.description, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          })
                        }
                      </View>
                    </View>
                  </View>
                </View>

              </View>



            </View>

          </View>

        </View>
      </View>


    </Page>
  </Document>

};

export default Tempalte9;