import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Alert,
} from 'react-native';
import Wizard from './components/wizard';

const sections = [
    'Section 1',
    'Section 2',
    'Section 3',
];

export default function App() {
    return (
        <View style={styles.container}>
            <Wizard onEnd={() => console.log('end')}>
                {
                    sections.map((section, index) => (
                        <Wizard.Step key={index}>
                            <View style={styles.innerContainer}>
                                <Text>{section}</Text>
                            </View>
                        </Wizard.Step>
                    ))
                }
            </Wizard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
