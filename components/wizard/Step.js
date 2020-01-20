import React, {Component} from 'react';
import {
    View,
    Button,
    StyleSheet,
} from 'react-native';

const step = props => {
    return (
        <View style={{flex: 1}}>
            {props.children}
            <View style={styles.buttonContainer}>
                {props.index != 0 ? <Button title={'Prev'} onPress={props.onPrev} /> : null}
                {!props.isLast ? <Button title={'Next'} onPress={props.onNext} /> : <Button title={'Finish'} onPress={props.onEnd} />} 
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    button: {
        backgroundColor: 'gray',
        width: '100%',
    }
});

export default step;