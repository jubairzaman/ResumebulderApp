import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect, Font } from '@react-pdf/renderer';
import Jumbotron from '../../jumbotron';
import { Mobile } from '../../icons/mobile';
import { Call } from '../../icons/call';
import { Linkedini } from '../../icons/Linkedini';
import { Mail } from '../../icons/mail';


import LanguageProgressBar3 from './LanguageProgressBar3';
import { Address, Email } from '../../icons/address';
import { Workexperiancei } from '../../icons/WorkExperiance';
import { Education } from '../../icons/Education';
import { Reference } from '../../icons/reference';
import { Dot } from '../../icons/Dot';
import { Skill } from '../../icons/skill';
import CvProgressbar31 from './cvProgressbar3';

Font.register({ family: 'Roboto' });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',

  },
  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1
  },

  mainContainer: {
    flexDirection: 'row',
  },

  section1: {
    paddingLeft: "30px",
    width: "40%",
    backgroundColor: "rgb(241, 242, 243)"
  },

  section2: {
    width: "60%",

    paddingRight: "30px"

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
  font1: {
    fontFamily: 'Roboto'
  }
});

// Create Document Component
const Template3 = ({ cv, heading, content }) => {
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


        <View style={{ ...styles.section1, ...styles.column }}>
          <View style={{ ...{ marginTop: "30px" } }}  >

            <View style={{ ...styles.justifyCenter, }}>
              <Text style={{ fontSize: "40px", fontWeight: 'heavy', color: "#B0A273", marginLeft: "20px" }}>{valueText(cv.firstName, "First Name")} </Text>

              {/* <Text style={{ fontSize: "10px", color: "#000000", marginLeft: "2px" }}>{valueText(cv.profession, "Job Title")}</Text> */}
            </View>
            <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fColumn }}>
              <Image style={{ width: "120px", height: "120px", borderRadius: "50%", marginLeft: "20px", marginVertical: "20px" }} src={(cv.profileImage != null && cv.profileImage !== "") ? cv.profileImage : "/cvpimg.png"} alt="Profile Image"></Image>
            </View>

          </View>

          <View>
            <Text style={{ ...styles.textCenter, ...{ color: "#000000", fontWeight: "bold" } }}>Why Me ? </Text>
            <View style={{ width: '100%', }}>

              <Text style={{ fontSize: '10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "12px", paddingRight: "30px", color: "rgb(71 85 105)", }}>{valueText(cv.phistory, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...")}.</Text>
            </View>


          </View>

          <View style={{ ...{ marginTop: "400px" } }}>

            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
                <Call />
                <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000" }}>{cv.phone ?? "Phone Number"}</Text>
              </View>
            </View>


            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>

                <Mail></Mail>
                <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000" }}>{cv.email ?? "Email"}</Text>
              </View>
            </View>

            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
                <Address></Address>
                <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000" }}>{cv.city ?? "Address"}</Text>
              </View>
            </View>
            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "7px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
                <Linkedini></Linkedini>

                <View>
                  <Text style={{ fontSize: "15px", paddingLeft: "12px", color: "#000000", fontWeight: "600px" }}>More Info On </Text>
                  <Text style={{ fontSize: "10px", paddingLeft: "12px", color: "#000000", fontWeight: "600px" }}>Linkedin.com/#####</Text>
                </View>
              </View>
            </View>

          </View>

        </View>



        <View style={styles.section2}>

          {/* Profile History  */}


          <View style={{ padding: "15px" }}>

            <View style={{ width: '100%', }}>
              <Text style={{ color: "black", fontSize: "15px" }}> <Workexperiancei></Workexperiancei> {heading ?? "Work Experiance"}</Text>
              <View style={{ marginTop: "17px" }}>
                {
                  Object.keys(cv.experiences ?? []).map((key) => {
                    let exp = cv.experiences[key];
                    return <>
                      <View style={{ ...styles.flex, ...styles.fRow }} wrap={false}>
                        <View style={{ marginTop: "10px", marginLeft: "10px" }}>
                          <Dot></Dot>
                        </View>
                        <View style={{ marginLeft: "25px" }}>
                          <View style={{ ...{ marginTop: "10px" } }}>
                            <Text style={{ ...{ fontSize: "12px" } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                            <hr></hr>
                            <View style={{}}>
                              <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop: "2px" } }}>{valueText(exp.jobTitle, "Job Title")} At {valueText(exp.employer, "Companey Name")},{valueText(exp.address, "Job Address")}</Text>

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

          <View style={{ padding: "15px" }}>

            <View style={{ width: '100%', }}>
              <Text style={{ color: "black", fontSize: "15px" }}> <Education></Education> {heading ?? "Education"}</Text>
              <View style={{ marginTop: "17px" }}>

                {
                  Object.keys(cv.education ?? []).map((key) => {
                    let edu = cv.education[key];
                    return <>
                      <View style={{ ...styles.flex, ...styles.fRow }} wrap={false}>
                        <View style={{ marginTop: "10px", marginLeft: "10px" }}>
                          <Dot></Dot>
                        </View>
                        <View style={{ marginLeft: "25px" }}>
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
                    </>
                  })
                }
              </View>
            </View>
          </View>




          <View style={{ padding: "20px" }} >
            <View wrap={false}  >

              <Text style={{ color: "black", fontSize: "15px", marginBottom: "10px" }}><Skill></Skill> {heading ?? "Skills"}</Text>

              {
                Object.keys(cv.skills ?? []).map((key) => {
                  return <CvProgressbar31 key={key}  skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                })
              }
            </View>
            <View  wrap={false} >

              <Text style={{ color: "black", fontSize: "15px", marginTop:"10px" }}><Skill></Skill> {heading ?? "Language"}</Text>
              {
                Object.keys(cv.languages ?? []).map((key) => {

                  return <LanguageProgressBar3 key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
                })
              }
            </View>
          </View>



















          <View style={{ padding: "15px", marginLeft: "8px" , marginTop:"10px" }} wrap={false}>

            <View style={{ width: '100%', }}>
              <Text style={{ color: "black", fontSize: "15px" }}><Reference></Reference>{heading ?? "Reference"}</Text>
              <View>
                {
                  Object.keys(cv.reference ?? []).map((key) => {
                    let ref = cv.reference[key];
                    console.log(ref)
                    return <>
                      <View style={{ ...{ marginTop: "10px", marginLeft: "15px" } }} wrap={false}>
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


      </View>

    </Page>
  </Document>
};

export default Template3;