import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({label, onClick }) => {
    //initialiastion 
    //state
    //handlers
    //view
    return (
        <Pressable onPress={onClick} style={StyleSheet.button}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
    },
    label: {
        fontSize: 16,
    },
});

export default Button;

