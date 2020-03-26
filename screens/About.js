import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {
        const data = this.props.navigation.getParam('data');
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Image 
                        style={styles.image}
                        source={{ uri: data.urls.regular }}
                    />
                    <View style={styles.info}>
                        <View style={styles.credentions}>
                            <Image 
                                style={styles.userImage}
                                source={{ uri: data.user.profile_image.large }}
                            />
                            <Text style={styles.username}>{data.user.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.bio}>{data.user.bio}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        alignSelf: 'auto',
        height: 400,
    },
    info: {
        padding: 25,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 15
    }, 
    username: {
        fontFamily: 'nunito-bold',
        fontSize: 15,
    }, 
    credentions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bio: {
        paddingTop: 15,
        fontFamily: 'nunito-regular',
    },
})