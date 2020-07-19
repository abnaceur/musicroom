import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Modal,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
    ModalSelectList,
} from 'react-native-modal-select-list';

// Import context
import { Context as AuthContext } from '../context/AuthContext';
import { Card, Tile, ListItem, Button, Header } from "react-native-elements";
import FavOff from "react-native-vector-icons/MaterialIcons";
import BackWard from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Sound, { setCategory } from "react-native-sound";

// Import servces
import { updateTrackLikeService, getPlaylistByidService } from '../service/playListService';

const PlaylistDetailsScreens = (props) => {

    const { state } = useContext(AuthContext);
    const [listDetails, setDetails] = useState({});
    const [trackList, setTrackList] = useState([]);
    const [songsList, setSongsList] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [rerender, setRerender] = useState(0);
    const [sound, setSound] = useState(false);
    const { navigation, route } = props;

    const handlSongsList = (list) => {
        let data = [];
        if (list && list.length > 0) {
            list.map((l, i) => {
                data.push({
                    preview: l.preview,
                    position: i,
                    likes: l.likes,
                    selected: false,
                    label: (i + 1).toString(),
                    value: i.toString(),
                })
            })
        }

        setSongsList(data);
    }

    useEffect(() => {
        if (route.params?.playListDetails) {
            let dataIn = JSON.parse(route.params.playListDetails);
            getPlaylistByidService(dataIn._id, state.token)
                .then(data => {
                    if (data.playList) {
                        setDetails(data.playList)
                        setTrackList(data.playList.trackList.sort(a => a.position));
                        handlSongsList(data.playList.trackList);
                    }
                })
        }
    }, [route.params.playListDetails]);

    useEffect(() => {
        if (rerender !== 0) {
            setTrackList(trackList);
        }
    }, [rerender])

    const startPlay = (i) => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        }
        setCurrentSong(i);
        if (songsList[i])
            var sound1 = new Sound(songsList[i].preview, '',
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

    const handleLikePress = async (id, track) => {
        let user = JSON.parse(await AsyncStorage.getItem('userInfo'));
        if (track.likes.indexOf(user.userId) === -1) {
            trackList[id].likes.push(user.userId);
        } else {
            trackList[id].likes.splice(trackList[id].likes.indexOf(user.userId), 1);
        }
        await setTrackList(trackList);
        setRerender(Math.floor(Math.random() * 999999999));
        await updateTrackLikeService(listDetails._id, track, state.token)
    }


    let modalRef;
    const openModal = () => modalRef.show();
    const saveModalRef = ref => modalRef = ref;
    const onSelectedOption = newPos => {
        let data = songsList;
        // Get old position
        let oldPos = data.filter(l => l.selected)[0].position;
        if (parseInt(oldPos) !== parseInt(newPos)) {
          
            let arrangedTrack = array_move(trackList, oldPos, newPos);
            setTrackList(arrangedTrack);

            let newListTr = listDetails;
            newListTr.trackList = arrangedTrack;
            setDetails(newListTr);
            handlSongsList(arrangedTrack);
            // Force renderer
            setRerender(Math.floor(Math.random() * 9999999999));
        }
    };

    const array_move = (arr, old_index, new_index) => {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return (arr)
    };

    const handleEditPosPress = (pos, track) => {
        let data = songsList;

        for (let i = 0; i < data.length; i++) {
            if (i === parseInt(pos)) {
                data[i].label = (data[i].position + 1).toString() + " current position";
                data[i].selected = true;
            }
            else {
                data[i].label = (data[i].position + 1).toString();
                data[i].selected = false;
            }
        }
        setSongsList(data.sort(a => a.position));
        openModal()

    }

    return (
        <ScrollView style={Styles.container}>

            <ModalSelectList
                ref={saveModalRef}
                placeholder={"Text something..."}
                closeButtonText={"Close"}
                options={songsList}
                onSelectedOption={onSelectedOption}
                disableTextSearch={false}
            />


            <View>
                <Header
                    backgroundColor="#633689"
                    centerComponent={{ text: listDetails.name, style: { color: "#fff" } }}
                    leftComponent={
                        <BackWard
                            onPress={() => { pause(), navigation.goBack() }}
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
                    listDetails.trackList && trackList ? trackList.map((l, i) => (
                        <ListItem

                            key={i}
                            leftAvatar={{ source: { uri: l.album ? l.album.cover_big : null } }}
                            title={l.title}
                            // subtitle={l.subtitle}
                            bottomDivider
                            rightTitle={listDetails.isVote ? (l.likes.length).toString() : null}
                            rightIcon={listDetails.trackList.isVote ? <SimpleLineIcons
                                onPress={() => handleLikePress(i, l)}
                                name="like"
                                size={25}
                                color="blue"
                            /> : null
                            }

                            rightIcon={listDetails.isEditable ? <SimpleLineIcons
                                onPress={() => handleEditPosPress(i, l)}
                                name="cursor-move"
                                size={25}
                                color="blue"
                            /> : null
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
    checkBoxStyle: {
        flex: 0.2
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    textContainer: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonModal: {
        marginTop: 10,
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        // elevation: 2,        
    },
})


export default PlaylistDetailsScreens;