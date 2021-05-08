import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      paddingLeft: 5,
      paddingBottom: 10,
      backgroundColor: '#0000',
    },

    image: {
        width: 120,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',

    }
  });


export default styles;