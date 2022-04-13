import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme/'


const styles = StyleSheet.create({
    container:{
        flex: 1
    },    
    textBalloon:{
        textAlign: 'center',
        marginTop: 20,
        width: '100%',
        fontSize: 20,
        backgroundColor: theme.colors.azulEscuro
    },

});

export default styles

