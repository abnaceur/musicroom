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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Sound, { setCategory } from "react-native-sound";


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

    const startPlay = (i) => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        }
        setCurrentSong(i);
        if (songsList[i])
            var sound1 = new Sound(songsList[i], '',
                (error, sound) => {
                    if (error) {
                        alert('error' + error.message);
                        return;
                    }
                    setIsPlaying(true);
                    setSound(sound1);
                    sound1.play(() => {
                        sound1.release();
                        if (parseInt(i) + 1 < songsList.length) {
                            setCurrentSong(i + 1);
                            startPlay(i + 1);
                        }
                        else {
                            setCurrentSong(0);
                            startPlay(0);
                        }
                    });
                });
    }

    const pause = (i) => {
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
                            onPress={() => {pause(), navigation.goBack()}}
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
                    onPress={() => !isPlaying ? startPlay(currentSong) : pause(currentSong)}
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
                            rightIcon={<SimpleLineIcons
                                name="like"
                                size={25}
                                color="blue"
                            />
                            }
                            leftIcon={i === currentSong && isPlaying ?
                                <SimpleLineIcons
                                    name="control-pause"
                                    size={25}
                                    color="blue"
                                    onPress={() => pause(i)}
                                />
                                : <SimpleLineIcons
                                    name="control-play"
                                    size={24} color="blue"
                                    onPress={() => startPlay(i)
                                    }
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