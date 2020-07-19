const Event = require('../../models/event');
const EventClass = require("../../class/EventClass");

const getEventById = (id) => {
    return new Promise((resolve, reject) => {
        Event.findById(id).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getEventById ERR :", err)
                reject(err)
            });
    })
}

const getAllPublicEvent = () => {
    return new Promise((resolve, reject) => {
        Event.find({ public: true }).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getEventById ERR :", err)
                reject(err)
            });
    })
}

const updateEvent = (Event) => {
    return new Promise(async (resolve, reject) => {
        getEventById(Event.id)
            .then(result => {
                if (result) {
                    result.set({ musics: Event.musics })
                    result.set({ creator: Event.creator })
                        .then(newEvent => {
                            resolve(newEvent)
                        })
                } else {
                    reject()
                }
            })
    })
}

const updateEventTracks = (id, track) => {
    return new Promise(async (resolve, reject) => {
        getEventById(id)
            .then(result => {
                result.trackList[track.position] = track;
                Event.findByIdAndUpdate(
                    result._id,
                    result,
                    { new: true },
                    (err, newTrackLikes) => {
                        if (err) resolve(false);
                        resolve(newTrackLikes);
                    }
                )
            })
    })
}

const updateEventTracksPos = (id, tracks) => {
    return new Promise(async (resolve, reject) => {
        getEventById(id)
            .then(result => {
                result.trackList = tracks;
                Event.findByIdAndUpdate(
                    result._id,
                    result,
                    { new: true },
                    (err, response) => {
                        if (err) resolve(false);
                        resolve(response);
                    }
                )
            })
    })
}

const createEventAsNew = (data, userId) => {
    return new Promise(async (resolve, reject) => {
        
        let event = new Event(await EventClass.CreateNewEvent(data, userId));
        event.save().then(res => {
            resolve(res);
        }).catch(err => {
            console.log("createEvent ERR :", err);
            reject(err);
        })
    })
}

const getMine = (userId) => {
    return new Promise((resolve, reject) => {
        Event.find({ creator: userId }).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getEventById ERR :", err)
                reject(err)
            });
    })
}

const deleteEvent = (id) => {
    return new Promise((resolve, reject) => {
        Event.findByIdAndDelete(id).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getEventById ERR :", err)
                reject(err)
            });
    })
}

module.exports = {
    getMine,
    updateEvent,
    updateEventTracks,
    updateEventTracksPos,
    getEventById,
    createEventAsNew,
    getAllPublicEvent,
    deleteEvent
}