const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "Music Room",
        "description": "Music Room is a Spotify like mobile application \
        to listen and share music tracks.",
        "version": "Beta"
    },
    "servers": [
        {
            "url": 'http://localhost:3000/',
            "description": 'Local server'
        }
    ],
    "produces": ["application/json"],
    "consumes": "application/json",
    "paths": {
        // Socket 
        "LIST OF SOCKET": {
            "get": {
                "x-swagger-router-controller": "socket.emit",
                "operationId": "socket.emit",
                "summary": "socket.emit",
                "description": 'socket.emit',
                "tags": ["Socket"],
                "responses": {
                    '1': {
                        "description": "event name : newCertificate",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "certificate": {
                                    "type": "certificate",
                                    "example": {}
                                }
                            }
                        },
                    },
                    '2': {
                        "description": "event name : deleteCertificate",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "certificate": {
                                    "type": "certificate",
                                    "example": {}
                                }
                            }
                        },
                    },
                    '3': {
                        "description": "event name : newPlaylist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "playList": {
                                    "type": "playList",
                                    "example": {}
                                }
                            }
                        },
                    },
                    '4': {
                        "description": "event name : updatePlaylist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "playList": {
                                    "type": "playList",
                                    "example": {}
                                }
                            }
                        },
                    },
                    '5': {
                        "description": "event name : deletePlaylist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "playList": {
                                    "type": "playList",
                                    "example": {}
                                }
                            }
                        },
                    }
                }
            }
        },

        /// User 
        "/api/v1/users/signup": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users",
                "summary": "Create a new user",
                "description": 'Create a new user',
                "tags": ["User"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    // {
                    //     "name": "username",
                    //     "in": "formData",
                    //     "type": "string",
                    //     "required": true
                    // },
                    // {
                    //     "name": "email",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    // {
                    //     "name": "password",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "example": "JohnDao"
                                },
                                "email": {
                                    "type": "string",
                                    "example": 'john.dao@musicroom.io'
                                },
                                "password": {
                                    "type": "string",
                                    "example": "IamPassword123!"
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '408': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 408
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Regex error mail'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '409': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 409
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Regex error username'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '410': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 410
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Regex error password.'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '406': {
                        "description": "This account already exists",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": "This account already exists"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Password must include more than 08 characters.'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '200': {
                        "description": "User account has been created succesfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account created with success.'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/delete": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users",
                "summary": "Delete user / Need header Authorization : bearer -> token",
                "description": 'Delete user / Need header Authorization : bearer -> token',
                "tags": ["User"],
                "description": `[Delete user link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/delete"})`,
                "parameters": [
                    // {
                    //     "name": "username",
                    //     "in": "formData",
                    //     "type": "string",
                    //     "required": true
                    // },
                    // {
                    //     "name": "email",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    // {
                    //     "name": "password",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {}

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'User not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "User account has been deleted succesfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account deleted with success.'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/id/{id}": {
            "get": {
                "x-swagger-router-controller": "users",
                "operationId": "users",
                "summary": "Get User by Id / Need header Authorization : bearer -> token",
                "description": 'Get data of user by sending userId / Need header Authorization : bearer -> token',
                "tags": ["User"],
                "description": `[Get user by id link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/id/{id}"})`,
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": " ID of the user to get",
                    }
                ],
                "responses": {
                    '406': {
                        "description": "Bad id format",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Bad id format"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '202': {
                        "description": "User not found",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "User not found"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '444': {
                        "description": "Error Unknow + err",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Return user data of userId",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "user": {
                                                    "type": "User",
                                                    "example": '{"firstname":"","lastname":"","active":false, "blocked":false,"_id":"5efe6c572fb2010021e735ab","email":"john.dao@musicroom.io","validationToken":"__token__","password":"__encodePasswd__","dateOfCreation":"2020-07-02T23:23:03.355Z","dateOfLastUpdate":"2020-07-02T23:23:03.355Z","__v":0}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },

        /// PlayList
        "/api/v1/playlist/id/{id}": {
            "get": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist",
                "summary": "Get playlist by Id / Need header Authorization : bearer -> token",
                "description": 'Get data of playlist by sending playlist / Need header Authorization : bearer -> token',
                "tags": ["playlist"],
                "description": `[Get playlist by id link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/playlist/id/{id}"})`,
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": " ID of the playlist to get",
                    }
                ],
                "responses": {
                    '406': {
                        "description": "Bad id format",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Bad id format"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '202': {
                        "description": "playlist not found",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "playlist not found"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '444': {
                        "description": "Error Unknow + err",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Return playlist data",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "Playlist",
                                                    "example": '{...........}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/playlist/getAllPublic": {
            "get": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist",
                "summary": "Get all public playlist / Need header Authorization : bearer -> token",
                "description": 'Get data of all public playlist / Need header Authorization : bearer -> token',
                "tags": ["playlist"],
                "description": `[Get user public playlist link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/playlist/getAllPublic"})`,
                "responses": {
                    '406': {
                        "description": "Bad id format",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Bad id format"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '202': {
                        "description": "error data",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "error data"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '444': {
                        "description": "Error Unknow + err",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Return playlist []",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playListArray": {
                                                    "type": "Playlist Array",
                                                    "example": '[{Playlist}, {Playlist}]'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/playlist/new": {
            "post": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist / Need header Authorization : bearer -> token",
                "summary": "Create playlist / Need header Authorization : bearer -> token",
                "description": 'Create playlist',
                "tags": ["playlist"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "public": {
                                    "type": "boolean",
                                    "example": false
                                },
                                "name": {
                                    "type": "string",
                                    "example": 'testPlaylist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "error",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "playlist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "playlist",
                                                    "example": '{}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },

        // edit down 
        "/api/v1/playlist/mine": {
            "get": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist",
                "summary": "Get playlist by Id / Need header Authorization : bearer -> token",
                "description": 'Get data of playlist by sending playlist / Need header Authorization : bearer -> token',
                "tags": ["playlist"],
                "description": `[Get playlist by id link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/playlist/id/{id}"})`,
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": " ID of the playlist to get",
                    }
                ],
                "responses": {
                    '406': {
                        "description": "Bad id format",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Bad id format"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '202': {
                        "description": "playlist not found",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "playlist not found"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '444': {
                        "description": "Error Unknow + err",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Return playlist data",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "Playlist",
                                                    "example": '{...........}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/playlist/new": {
            "post": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist / Need header Authorization : bearer -> token",
                "summary": "Create playlist / Need header Authorization : bearer -> token",
                "description": 'Create playlist',
                "tags": ["playlist"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "public": {
                                    "type": "boolean",
                                    "example": false
                                },
                                "name": {
                                    "type": "string",
                                    "example": 'testPlaylist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "error",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "playlist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "playlist",
                                                    "example": '{}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/playlist/update": {
            "post": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist / Need header Authorization : bearer -> token",
                "summary": "Create playlist / Need header Authorization : bearer -> token",
                "description": 'Create playlist',
                "tags": ["playlist"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "public": {
                                    "type": "boolean",
                                    "example": false
                                },
                                "name": {
                                    "type": "string",
                                    "example": 'testPlaylist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "error",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "playlist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "playlist",
                                                    "example": '{}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/playlist/delete": {
            "post": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist / Need header Authorization : bearer -> token",
                "summary": "Create playlist / Need header Authorization : bearer -> token",
                "description": 'Create playlist',
                "tags": ["playlist"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "public": {
                                    "type": "boolean",
                                    "example": false
                                },
                                "name": {
                                    "type": "string",
                                    "example": 'testPlaylist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "error",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "playlist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "playlist",
                                                    "example": '{}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },

        /// Certificate
        "/api/v1/certificate/delete": {
            "post": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist / Need header Authorization : bearer -> token",
                "summary": "Create playlist / Need header Authorization : bearer -> token",
                "description": 'Create playlist',
                "tags": ["Certificate"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "public": {
                                    "type": "boolean",
                                    "example": false
                                },
                                "name": {
                                    "type": "string",
                                    "example": 'testPlaylist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "error",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "playlist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "playlist",
                                                    "example": '{}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/certificate/new": {
            "post": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist / Need header Authorization : bearer -> token",
                "summary": "Create playlist / Need header Authorization : bearer -> token",
                "description": 'Create playlist',
                "tags": ["Certificate"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "public": {
                                    "type": "boolean",
                                    "example": false
                                },
                                "name": {
                                    "type": "string",
                                    "example": 'testPlaylist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad id format'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '407': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Bad token'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '202': {
                        "description": "Data validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'not found'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '444': {
                        "description": "error",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow  + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "playlist",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "playlist",
                                                    "example": '{}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/certificate/myCertificate": {
            "get": {
                "x-swagger-router-controller": "playlist",
                "operationId": "playlist",
                "summary": "Get playlist by Id / Need header Authorization : bearer -> token",
                "description": 'Get data of playlist by sending playlist / Need header Authorization : bearer -> token',
                "tags": ["Certificate"],
                "description": `[Get playlist by id link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/playlist/id/{id}"})`,
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": " ID of the playlist to get",
                    }
                ],
                "responses": {
                    '406': {
                        "description": "Bad id format",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Bad id format"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '202': {
                        "description": "playlist not found",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "playlist not found"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 202
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '444': {
                        "description": "Error Unknow + err",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": false
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": "Error Unknow + err"
                                                },
                                            }
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 444
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Return playlist data",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "playlist": {
                                                    "type": "Playlist",
                                                    "example": '{...........}'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },


    }
};

module.exports = swaggerDocument;