import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect, Font } from '@react-pdf/renderer';
import Jumbotron from '../../jumbotron';
import { Mobile } from '../../icons/mobile';
import { Call } from '../../icons/call';
import { Mail } from '../../icons/mail';
import CvProgressBar2 from './cvProgressbar2';
import LanguageProgressBar2 from './LanguageProgressBar2';
import { Bluebox } from '../../icons/bluebox';
import { fontSize } from '@mui/system';
import { Dot } from '../../icons/Dot';

// Create styles
const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontSize: "35px",
    color: "#04649F"
  },
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

      <View style={{ ...styles.mainContainer, ...{ padding: "30px", borderTop: '8px solid #04649F ' } }}>


        <View style={styles.row}>

          <View style={styles.col7}>
            {/* profile name section  */}

            <View style={{ ...styles.justifyCenter, ...{ marginTop: "30px" } }}>
              <Text style={{ fontSize: "35px", color: "#566573" }}>{valueText(cv.firstName, "First Name")}  </Text>
              <Text style={{ fontSize: "35px", color: "#04649F" }}>{valueText(cv.lastName, "Last Name")}  </Text>


              <Text style={{ fontSize: "10px", color: "#000000", marginLeft: "5px" }}>{valueText(cv.profession, "Job Title")}</Text>
            </View>





            {/* Work Experiance  */}
            <View style={{ ...{ marginTop: "30px" } }}>


              <View style={{ width: '100%', }}>
                <Text style={{ color: "#ABB2B9", marginBottom: "10px", fontSize: "15px" }}> <Bluebox />{heading ?? "Work Experiance"}</Text>

                <View style={{}}>
                  {
                    Object.keys(cv.experiences ?? []).map((key) => {
                      let exp = cv.experiences[key];
                      return <>
                        <View style={{ ...styles.flex, ...styles.fRow }} wrap={false}>
                          <View style={{ marginTop: "8px", marginLeft: "5px" }}>
                            <Dot></Dot>
                          </View>
                          <View style={{ marginLeft: "20px" }}>
                            <View style={{ ...{ marginTop: "8px" } }}>
                              <Text style={{ ...{ fontSize: "12px" } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                              <hr></hr>
                              <View style={{}}>
                                <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px", color: "#04649F" } }}>{valueText(exp.jobTitle, "Job Title")} At {valueText(exp.employer, "Companey Name")},{valueText(exp.address, "Job Address")}</Text>

                                <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(exp.address, "Your Job Address Here")}</Text>
                              </View>
                            </View>
                            <View style={{}}>
                              <Text style={{ ...{ fontSize: "10px", paddingTop: "3px", color: "#AFAFAF", width: "80%" } }}>{valueText(exp.description, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
                            </View>
                          </View>
                        </View>
                      </>
                    })
                  }
                </View>
              </View>
            </View>

            <View style={{ marginTop: "20px" }}>

              <View style={{ width: '100%', }}>
                <Text style={{ color: "#ABB2B9", fontSize: "15px" }}> <Bluebox />{heading ?? "Education"}</Text>
                <View style={{}}>
                  {
                    Object.keys(cv.education ?? []).map((key) => {
                      let edu = cv.education[key];
                      return <>
                        <View style={{ ...styles.flex, ...styles.fRow, ...{marginTop:"15px"} }} wrap={false}>
                          <View style={{ marginTop: "10px", marginLeft: "5px" }}>
                            <Dot></Dot>
                          </View>
                          <View style={{ marginLeft: "20px" }}>
                            <View style={{ ...{ marginTop: "10px" } }}>
                              <Text style={{ ...{ fontSize: "12px" } }}>{valueText(edu.startdate, "Start Date")}- {valueText(edu.enddate, "End Date")}</Text>
                              <hr></hr>
                              <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px" } }}>{valueText(edu.degree, "Degree")} At {valueText(edu.school, "School Name")},{valueText(edu.address, "School Address")}</Text>

                              {/* <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(exp.address,"Your Job Address Here")}</Text> */}
                            </View>
                            <View style={{}}>
                              <Text style={{ ...{ fontSize: "10px", paddingTop: "3px", color: "#AFAFAF", width: "80%" } }}>{valueText(edu.description, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
                            </View>
                          </View>
                        </View>
                      </>
                    })
                  }

                </View>
              </View>
            </View>


            {/* reference  */}
            <View style={{ marginTop: "20px" }}>

              <View style={{ width: '100%', }} wrap={false}>
                <Text style={{ color: "#ABB2B9", fontSize: "15px" }}> <Bluebox /> {heading ?? "Reference"}</Text>
                <View style={{ marginLeft: "40px" }}>
                  {
                    Object.keys(cv.reference ?? []).map((key) => {
                      let ref = cv.reference[key];

                      return <>
                        <View style={{ ...{ marginTop: "10px" } }} wrap={false}>
                          <Text style={{ ...{ fontSize: "10px", fontStyle: "bold" } }}>{valueText(ref.rname, "Reference Name")}</Text>

                          <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(ref.rdetails, "His Details")}</Text>
                        </View>

                      </>
                    })
                  }

                </View>
              </View>
            </View>

          </View>

          <View style={{ ...styles.col5, ...{ borderLeft: "1px solid #CFD8DC", } }}>


            <View style={{ "position": "relative", padding: "15px", }}>

              <View >
                <Image style={{ borderRadius: "50%", position: "absolute", width: "100px", height: "100px", backgroundColor: "gray", left: "-35%", top: "90%", transform: "translateY(-5%)" }} src={(cv.profileImage != null && cv.profileImage !== "") ? cv.profileImage : "/cvpimg.png"} alt="Profile Image"></Image>
              </View>
              {/* Info Container */}
              <View style={{ paddingLeft: "50px", marginTop: "25px" }}>

                <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000" }}>Tel : {valueText(cv.phone ?? "Phone Number")}</Text>
                <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000" }}>Email : {valueText(cv.email ?? "Your Email")}</Text>
                <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000" }}>Address : {valueText(cv.city ?? "Your Address")}</Text>

              </View>
            </View>

            <View style={{ marginLeft: "15px", marginTop: "58px" }}>
              <Text style={{ color: "#ABB2B9", fontSize: "15px" }}> <Bluebox />{heading ?? "WHO AM I?"}</Text>

              <Text style={{ fontSize: '10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "12px", paddingRight: "30px", color: "rgb(71 85 105)", }}>{valueText(cv.phistory, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...")}.</Text>

            </View>


            <View style={{ marginLeft: "15px ", marginTop: "20px" }}>
              <Text style={{ color: "#ABB2B9", fontSize: "15px", marginBottom: "10px" }}> <Bluebox />{heading ?? "Professional Skills"}</Text>

              <View>
                {
                  Object.keys(cv.skills ?? []).map((key) => {
                    return <CvProgressBar2 key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                  })
                }
              </View>
            </View>
            <View style={{ ...{ marginTop: "20px", marginLeft: "15px" } }} >

              <Text style={{ color: "#ABB2B9", fontSize: "15px" }}> <Bluebox />{heading ?? "LANGUAGE"}</Text>
              {
                Object.keys(cv.languages ?? []).map((key) => {

                  return <LanguageProgressBar2 key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
                })
              }
            </View>






          </View>

        </View>

      </View>

    </Page>
  </Document>
};

export default Template2;