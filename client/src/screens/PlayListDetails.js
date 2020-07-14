import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';

// Import context
import { Context as AuthContext } from '../context/AuthContext';
import { Card, Tile, ListItem, Button, Header } from "react-native-elements";
import FavOff from "react-native-vector-icons/MaterialIcons";
import BackWard from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/AntDesign';

import Sound from "react-native-sound";


const PlaylistDetailsScreens = (props) => {
    const { signout } = useContext(AuthContext);
    const [listDetails, setDetails] = useState({});
    const [trackList, setTrackList] = useState({});
    const [songsList, setSongsList] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [sound, setSound] = useState(false);
    const { navigation, route } = props;

    const handlSongsList = (list) => {
        // console.log("list :", list);
        let data = [];
        if (list && list.length > 0) {
            list.map(l => {
                data.push(l.preview)
            })
        }

        setSongsList(data);
    }

    useEffect(() => {
        if (route.params?.playListDetails) {
            let data = JSON.parse(route.params.playListDetails);
            // console.log("route.params :", data);
            setDetails(JSON.parse(route.params.playListDetails))
            setTrackList(data.trackList);
            handlSongsList(data.trackList)
        }
    }, []);

    useEffect(() => {
        console.log("currentSong :", currentSong);
        // if (currentSong !== 0)
        startPlay();
    }, [currentSong])

    const startPlay = () => {
        console.log("songsList[currentSong] ", songsList[currentSong], currentSong)
        if (songsList[currentSong])
            var sound1 = new Sound(songsList[currentSong], '',
                (error, sound) => {
                    if (error) {
                        alert('error' + error.message);
                        return;
                    }
                    setIsPlaying(true);
                    setSound(sound1);
                    sound1.play(() => {
                        console.log("Releaded", songsList.length, parseInt(currentSong))
                        sound1.release();
                        if (parseInt(currentSong) + 1 < songsList.length)
                            setCurrentSong(currentSong + 1);
                        else
                            setCurrentSong(0);
                    });
                });
    }

    const pause = () => {
        if (sound) {
            sound.pause();
        }
        setIsPlaying(false);
    };

    return (
        <ScrollView style={Styles.container}>
            <View>
                <Header
                    backgroundColor="#633689"
                    centerComponent={{ text: listDetails.name, style: { color: "#fff" } }}
                    leftComponent={
                        <BackWard
                            onPress={() => navigation.goBack()}
                            name="md-arrow-back"
                            size={24}
                            color="white"
                        />
                    }
                    rightComponent={
                        // name favoris for desactivate
                        <FavOff name="favorite-border" size={24} color="white" />
                    }
                />

                <Tile
                    imageSrc={require('../assets/music.jpg')}
                    title={listDetails.name}
                    featured
                    caption={listDetails.desctiption}
                />

                <Button
                    onPress={() => !isPlaying ? startPlay() : pause()}
                    icon={

                        <Icon
                            name={!isPlaying ? "play" : "pause"}
                            size={25}
                            color="white"
                        />
                    }
                    iconLeft
                    title="  Start playlist"
                />


                {
                    listDetails.trackList ? listDetails.trackList.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.album ? l.album.cover_big : null } }}
                            title={l.title}
                            // subtitle={l.subtitle}
                            bottomDivider
                            rightTitle="122"
                            rightIcon={<Icon
                                name="like1"
                                size={25}
                                color="blue"
                            />
                            }
                        />

                    )) : <Text>Empty list</Text>
                }

            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282830',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logoContainer: {
        color: 'white',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 20,
        fontWeight: "100",
        fontSize: 23
    },
    myForm: {
        flex: 3
    },

})


export default PlaylistDetailsScreens;