// Your JSON data
var jsonData = {
    "event": "test",
    "pages": [
        {
            "name": "prematch",
            "fields": [
                {
                    "name": "Name",
                    "type": "select",
                    "required": "yes",
                    "id": "names",
                    "file": "assets/names.txt"
                },
                {
                    "name": "Match #",
                    "type": "field",
                    "id": "match#",
                    "required": "yes",
                    "buttons": "no"
                },
                {
                    "name": "Team",
                    "type": "select",
                    "required": "yes",
                    "id": "teams",
                    "file": "assets/teams.txt"
                },
                {
                    "name": "Human Player at Amp?",
                    "type": "checkbox",
                    "id":"1",
                    "required": "yes"
                },  
            ]
        },
        {
            "name": "auto",
            "fields": [
                {
                    "name": "Amp Scores",
                    "type": "field",
                    "required": "no",
                    "id": "autoAmp",
                    "buttons": "yes"
                },
                {
                    "name": "Speaker Scores",
                    "type": "field",
                    "required": "no",
                    "id": "autoSpeaker",
                    "buttons": "yes"
                },
                {
                    "name": "Left starting zone",
                    "type": "checkbox",
                    "id":"2",
                    "required": "yes"
                },
            ]
        },
        {
            "name": "Tele-Op",
            "fields": [
                {
                    "name": "Amp Scores",
                    "type": "field",
                    "required": "no",
                    "id": "teleAmp",
                    "buttons": "yes"
                },
                {
                    "name": "Speaker Scores",
                    "type": "field",
                    "required": "no",
                    "id": "teleSpeaker",
                    "buttons": "yes"
                },
                {
                    "name": "Coopertition",
                    "type": "checkbox",
                    "id":"3",
                    "required": "yes"
                },
            ]
        },
        {
            "name": "End Game",
            "fields": [
                {
                    "name": "End game status",
                    "type": "select",
                    "required": "yes",
                    "id": "endgame",
                    "file": "assets/endgame.txt"
                },
                {
                    "name": "Trap Scores",
                    "type": "field",
                    "id": "trapScore",
                    "buttons": "yes"
                },
                {
                    "name": "Human player high note?",
                    "type": "field",
                    "id": "highnoteScore",
                    "buttons": "yes"
                }
            ]
        },
        {
            "name": "Other",
            "fields": [
                {
                    "name": "Robot Died",
                    "type": "checkbox",
                    "id":"5",
                    "required": "yes"
                },
                {
                    "name": "Robot Tipped",
                    "type": "checkbox",
                    "id":"6",
                    "required": "yes"
                },
                {
                    "name": "Did Not Play",
                    "type": "checkbox",
                    "id":"7",
                    "required": "yes"
                },
            ]
        },
        {
            "name": "QRCode",
            "fields": [
                {
                }
            ]
        }
    ]
};
