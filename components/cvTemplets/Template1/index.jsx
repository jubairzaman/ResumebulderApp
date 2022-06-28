import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';
import CvProgressBar from '../cvProgressbar';
import Jumbotron from '../jumbotron';
import { Mobile } from '../icons/mobile';
import { Call } from '../icons/call';
import { Mail } from '../icons/mail';
import { fontSize, style } from '@mui/system';
import SectionHeading from './sectionHeading';
import SectionComponent from './sectionComponent';
import SectionLayout from './sectionLayout';
import Styles from '../styles';
import { Profile } from '../icons/profile';
import LanguageProgressBar from '../LanguageProgressBar';
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
const Tempalte1 = ({ cv }) => {

  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ ...styles.row, ...{ marginTop: "20px" } }}>
        <View style={styles.col8}>

          <View style={styles.row}  >
            <View style={{ ...styles.col6, ...styles.flex, ...styles.justifyEnd, ...styles.fRow }}>
              <Image style={{ width: "100px", height: "100px" }} src="/cvpimg.png" alt="Profile Image"></Image>
            </View>
            <View style={{ ...styles.col6, ...styles.justifyCenter, ...{ paddingLeft: '24px' } }}>
              <Text style={{ fontSize: "30px" }}>{valueText(cv.firstName, "First Name")}</Text>
              <Text style={{ fontSize: "30px" }}>{valueText(cv.lastName, "Last Name")}</Text>
              <Text style={{ fontSize: "10px" }}>{valueText(cv.profession, "Job Title")}</Text>
            </View>
          </View>

        </View>

        <View style={{ ...styles.col4, ...styles.justifyCenter, ...{ paddingLeft: '24px', } }}>

          <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "6px" } }}>
            <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
              <Mobile />
              <Text style={{ fontSize: "10px", paddingLeft: "12px" }}>{cv.phone ?? "Phone Number"}</Text>
            </View>
          </View>

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
      </View>


      {/* Secound Part */}


      <View style={{ ...styles.row, ...{ backgroundColor: "#F3F8FF", padding: "12px", margin: "12px" } }}>

        <SectionLayout>
          <SectionLayout.TitleLeft></SectionLayout.TitleLeft>
          <SectionLayout.TitleRight></SectionLayout.TitleRight>

          <SectionLayout.ViewLeft>
            <View >

              <Text style={{ fontSize: "20px", fontColor: "" }}>Profile</Text>
              <Text style={{ fontSize: "10px" }}>A confident and creative designer
                who is self-motivated, selfsufficient and comes to you with
                a strong background in both
                print and digital media. Amanda
                has worked extensively in the
                automotive and travel industries
                producing high end business to
                business designs.</Text>
            </View>
          </SectionLayout.ViewLeft>
          <SectionLayout.ViewRight>
            <View >
              <Text style={{ fontSize: "20px" }}>Business Objective
              </Text>
              <Text style={{ fontSize: "10px" }}>A confident and creative designer
                who is self-motivated, selfsufficient and comes to you with
                a strong background in both
                print and digital media. Amanda
                has worked extensively in the
                automotive and travel industries
                producing high end business to
                business designs.</Text>

              <View style={{ ...styles.row, ...{ margin: "5px" } }}>
                <View style={{ ...{ backgroundColor: '#fff', margin: '5px', height: "20px" } }}>
                  <Text style={{ fontSize: "15px" }} >#KeyWord</Text>
                </View>
                <View style={{ ...{ backgroundColor: '#fff', margin: '5px', height: "20px" } }}>
                  <Text style={{ fontSize: "15px" }} >#KeyWord</Text>
                </View>
                <View style={{ ...{ backgroundColor: '#fff', margin: '5px', height: "20px" } }}>
                  <Text style={{ fontSize: "15px" }} >#KeyWord</Text>
                </View>
                <View style={{ ...{ backgroundColor: '#fff', margin: '5px', height: "20px" } }}>
                  <Text style={{ fontSize: "15px" }} >#KeyWord</Text>
                </View>
                <View style={{ ...{ backgroundColor: '#fff', margin: '5px', height: "20px" } }}>
                  <Text style={{ fontSize: "15px" }} >#KeyWord</Text>
                </View>
                <View style={{ ...{ backgroundColor: '#fff', margin: '5px', height: "20px" } }}>
                  <Text style={{ fontSize: "15px" }} >#KeyWord</Text>
                </View>
              </View>
            </View>
          </SectionLayout.ViewRight>


        </SectionLayout>



      </View>

      {/* third Part */}

      <View style={{ ...styles.row, ...{ padding: "12px", margin: "12px" } }}>

        <SectionLayout>
          <SectionLayout.TitleLeft>Expertise</SectionLayout.TitleLeft>
          <SectionLayout.TitleRight>Work Experiences</SectionLayout.TitleRight>

          <SectionLayout.ViewLeft>
            <View >
              {
                Object.keys(cv.skills ?? []).map((key) => {
                  return <CvProgressBar key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                })
              }
            </View>
            <View >

              <Text>Language</Text>
              {
                Object.keys(cv.languages ?? []).map((key) => {

                  return <LanguageProgressBar key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
                })
              }
            </View>
          </SectionLayout.ViewLeft>
          <SectionLayout.ViewRight>
            <View >
              {
                Object.keys(cv.experiences ?? []).map((key) => {
                  let exp = cv.experiences[key];
                  return <>
                    <View style={{ ...{ marginTop: "10px" } }}>
                      <Text style={{ ...{ fontSize: "15px", fontStyle: "bold" } }}>{valueText(exp.jobTitle, "Job Title")} at {valueText(exp.employer, "Employeer")}</Text>
                      <Text style={{ ...{ fontSize: "10px", } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                      <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{exp.address}</Text>
                    </View>
                    <View style={{ ...Styles.flex, ...Styles.fRow }}>
                      <Text style={{ ...{ fontSize: "10px" } }}>{exp.description}</Text>
                    </View>
                  </>
                })
              }
            </View>
          </SectionLayout.ViewRight>


        </SectionLayout>



      </View>


      {/* Third Part */}



    </Page>
  </Document>
};

export default Tempalte1;


