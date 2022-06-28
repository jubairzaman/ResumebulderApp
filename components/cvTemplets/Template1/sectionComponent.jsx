import { View, Text } from "@react-pdf/renderer"
import { Mobile } from "../icons/mobile";
import Styles from "../styles";

const SectionComponent = ({ view1, view2, viewCenter }) => {

    return (
        <View style={Styles.row}>
            <View style={{ ...Styles.col4, }}>
                {view1 ?? <>View 1</>}
            </View>
            {viewCenter != null ? <View style={{ ...Styles.col2, ...Styles.flex }}>
                {viewCenter}
            </View> :
                <View style={{ ...Styles.col2, ...Styles.flex, ...{ flexDirection: 'row', justifyContent: "center" } }}>
                    <View style={{ display: "flex", width: "1px", alignSelf: "stretch", borderLeft: "1px", borderStyle: "dashed", borderColor: "black" }}>

                    </View>
                </View>}

            <View style={{ ...Styles.col6, }}>
                {view2 ?? <>View 2</>}
            </View>
        </View>
    )
}

export default SectionComponent;