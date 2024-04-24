import { Dimensions, StyleSheet} from "react-native";

const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    borderShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: winWidth*0.2,
        elevation: 1,
    }
});

export default styles;