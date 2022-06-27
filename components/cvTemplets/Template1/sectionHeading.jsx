import { View, Text } from "@react-pdf/renderer"
import { Mobile } from "../icons/mobile";
import Styles from "../styles";

const SectionHeading = ({title1,title2}) => {

    return (
        <View style={Styles.row}>
            <View style={{ ...Styles.col4, }}>
                <Text>{title1??"Title 1"}</Text>
            </View>
            <View style={{ ...Styles.col2, }}>
                <Mobile></Mobile>
            </View>
            <View style={{ ...Styles.col6, }}>
            <Text>{title2??"Title 2"}</Text>
            </View>
        </View>
    )
}

export default SectionHeading;