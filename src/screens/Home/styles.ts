import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#131016',
        flex: 1,
        padding: 24
    },
    eventname: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
      },
      eventdate : {
        color: '#f8f8f8ae',
        fontSize: 16,
      },

      Input: {
        marginRight: 12,
        flex: 1,
        height: 56,
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
        backgroundColor: '#30cf8f',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,

      },

      buttonText: {
        color: '#f8f8f8',
        fontSize: 24,
        
      },

      form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 42,
      },

      listEmptyText: {
        color: '#ffffff',
        fontsize: 14,
        textAlign: 'center'
      }
  });
  