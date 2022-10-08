import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';
import Jumbotron from '../../jumbotron';
import { Mobile } from '../../icons/mobile';
import { Call } from '../../icons/call';
import { Mail } from '../../icons/mail';
import { Address } from '../../icons/address';
import CvProgressBar5 from './cvProgressbar5';
import LanguageProgressBar5 from './LanguageProgressBar5';
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

  section2: {
    padding: "15px",
    width: "45%",
    backgroundColor: "rgb(255,255,255)"
  },

  section1: {
    width: "65%",

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
const Tempalte5 = ({ cv, heading, content }) => {
  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>



      <View style={{ ...styles.mainContainer, ...{ padding: "25px", borderTop: "15px solid #000000" } }}>

        <View style={{ ...styles.section1, ...styles.column }}>
          <View style={{ ...styles.flex, ...styles.fRow }}  >

            <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fColumn, ...{ marginRight: "30px" } }}>
              <Image style={{ width: "100px", height: "100px", borderRadius: "50%", marginLeft: "20px", marginVertical: "20px" }} src={(cv.profileImage != null && cv.profileImage !== "") ? cv.profileImage : "/cvpimg.png"} alt="Profile Image"></Image>
            </View>

            <View style={{ ...styles.justifyCenter, }}>
              <Text style={{ fontSize: "25px", color: "#000000" }}>{valueText(cv.firstName, "First Name")} </Text>
              <Text style={{ fontSize: "25px", color: "#000000", width: "80%" }}>{valueText(cv.lastName, "Last Name")}</Text>

              <Text style={{ fontSize: "10px", color: "#ABB2B9", marginLeft: "2px" }}>{valueText(cv.profession, "Job Title")}</Text>
            </View>


          </View>





          <View style={{ padding: "15px" }}>

            <View style={{ width: '100%', }}>
              <Text style={{ color: "black", fontSize: "15px" }}>{heading ?? "Work Experiance"}</Text>
              <View style={{ marginTop: "10px" }}>
                {
                  Object.keys(cv.experiences ?? []).map((key) => {
                    let exp = cv.experiences[key];
                    return <>
                      <View style={{ ...styles.flex, ...styles.fRow ,...{marginTop:"10px"} }} wrap={false}>
                        <View style={{ marginTop: "10px" }}>

                        </View>
                        <View >
                          <View style={{ ...{ marginTop: "10px" } }}>
                            <Text style={{ ...{ fontSize: "12px" } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                            <hr></hr>
                            <View style={{}}>
                              <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px" } }}>{valueText(exp.jobTitle, "Job Title")} At {valueText(exp.employer, "Companey Name")},{valueText(exp.address, "Job Address")}</Text>

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

          <View style={{ padding: "15px" }}>

            <View style={{ width: '100%', }}>
              <Text style={{ color: "black", fontSize: "15px" }}>{heading ?? "Education"}</Text>
              <View style={{ marginTop: "10px" }}>

                {
                  Object.keys(cv.education ?? []).map((key) => {
                    let edu = cv.education[key];
                    return <>
                      <View style={{ ...styles.flex, ...styles.fRow ,...{marginTop:"10px"} }} wrap={false}>
                        <View style={{ marginTop: "10px" }}>
                        </View>
                        <View >
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






          <View style={{ padding: "15px" }} >

            <View style={{ width: '100%', }} wrap={false}>
              <Text style={{ ...{ color: "#000000", fontWeight: "200px", fontSize: "14px" } }}>REFERENCE</Text>
              <View>
                {
                  Object.keys(cv.reference ?? []).map((key) => {
                    let ref = cv.reference[key];
                    return <>
                      <View style={{ ...{ marginTop: "10px" } }} wrap={false}>
                        <Text style={{ ...{ fontSize: "13px", fontStyle: "bold", color: "#ABB2B9" } }}>{valueText(ref.rname, "rname")}</Text>

                        <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF", color: "#ABB2B9" } }}>{ref.rdetails}</Text>
                      </View>

                    </>
                  })
                }

              </View>
            </View>
          </View>











        </View>





        <View style={styles.section2}>

          <View style={{ ...{ marginTop: "20px" } }}>



            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                <Text style={{ fontSize: "10px", color: "#ABB2B9" }}> <Call /> {cv.phone ?? "Phone Number"}</Text>
              </View>
            </View>


            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                <Text style={{ fontSize: "10px", color: "#ABB2B9" }}> <Mail /> {cv.email ?? "Email"}</Text>
              </View>
            </View>

            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                <Text style={{ fontSize: "10px", color: "#ABB2B9" }}> <Address />  {cv.city ?? "Address"}</Text>
              </View>
            </View>
          </View>




          <View>

            <Text style={{ ...{ color: "#000000", fontWeight: "500px", fontSize: "12px", marginTop: "50px" } }}>Why Me ? </Text>
            <View style={{ width: '100%', }}>

              <Text style={{ fontSize: '10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "12px", paddingRight: "30px", color: "#ABB2B9" }}>{valueText(cv.phistory, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}.</Text>
            </View>

          </View>

          <View style={{ ...{ marginTop: "20px" } }}>
            <View>

              <Text style={{ ...{ color: "#000000", fontWeight: "200px", fontSize: "12px" } }}>PROFESSIONAL SKILLS </Text>

              {
                Object.keys(cv.skills ?? []).map((key) => {
                  return <CvProgressBar5 key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                })
              }
            </View>
            <View style={{ ...{ marginTop: "20px" } }} >

              <Text style={{ ...{ color: "#000000", fontWeight: "200px", fontSize: "12px" } }}>LANGUAGE</Text>
              {
                Object.keys(cv.languages ?? []).map((key) => {

                  return <LanguageProgressBar5 key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
                })
              }
            </View>
          </View>













        </View>


      </View>

    </Page>
  </Document>

};

export default Tempalte5;