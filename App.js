/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

var MOCKED_MOVIES_DATA = [
    {
        title: '标题',
        year: '2015',
        posters: { thumbnail: 'http://i.imgur.com/UePbdph.jpg' }
    }
];
const App = () => {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
        <View style={styles.container}>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center'
    }
});

export default App;
