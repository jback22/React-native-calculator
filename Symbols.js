import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

function Symbols(props) {
    const symbols = ['(', ')', '%', 'C'];
    console.log('symbols');

    return symbols.map((symbol) => {
        return (
            <TouchableOpacity key={symbol} style={styles.boxsym} onPress={() => props.addToScreen(symbol)}>
                <Text style={styles.number}>{symbol}</Text>
            </TouchableOpacity>
        )
    })
}

export default Symbols;

const styles = StyleSheet.create({

    number: {
        textAlign: 'center',
        fontSize: 30,
        color: '#202124'
    },
    boxsym: {
        width: '25%',
        height: 50,
        justifyContent: 'center',
        borderColor: '#f1f3f4',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#dfe1e5',
        //color: '#202124',
    },

});
