import { Dimensions, StyleSheet} from "react-native";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    borderShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default styles;