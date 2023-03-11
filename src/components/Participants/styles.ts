import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },  

    name: {
        marginRight: 12,
        flex: 1,
        backgroundColor: '#1f1e25',
        borderRadius: 10,
        color: '#ffffff',
        padding: 16,
        fontSize: 16,
    },

    button: {
        width: 56,
        heigth: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
    },

      buttonText: {
        color: '#f8f8f8',
        fontSize: 24,  
    },

    form: {
        width: '100%',
        flexDirection: 'row',
    }
});