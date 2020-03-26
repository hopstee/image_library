import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount() {
		const APIKey = "jbDgvLf4oVUMJf8JxWPANwqIBWtcn7cRo5jw16Ny_Uk";
		const URI = `https://api.unsplash.com/photos/random?count=30&client_id=${APIKey}`;
		fetch(URI)
			.then(response => response.json())
			.then(responseData => this.setState({ data: responseData, isLoading: false }))
	}
    
    render() {
        return this.state.isLoading ? (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="grey" />
            </View>
        ) : (
            <View style={styles.containerDark}>
                <FlatList
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('About', { data: item })}>
                                <Image 
                                    style={styles.image}
                                    source={{ uri: item.urls.small }}
                                />
                                <View style={styles.cardText}>
                                    <Text style={styles.imageDescription}>{item.alt_description}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // padding: 24,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    containerDark: {
        // padding: 24,
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        height: 200,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    card: {
        flex: 2,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardText: {
        padding: 10,
    },
    imageDescription: {
        fontFamily: 'nunito-regular',
    },
    itemsContainer: {
        marginTop: 20,
        height: '100%',
        backgroundColor: '#fff'
    }
})