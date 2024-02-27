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
                    "required": "yes"
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
                    "id": "autoAmp"
                },
                {
                    "name": "Speaker Scores",
                    "type": "field",
                    "required": "no",
                    "id": "autoSpeaker"
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
                    "id": "teleAmp"
                },
                {
                    "name": "Speaker Scores",
                    "type": "field",
                    "required": "no",
                    "id": "teleSpeaker"
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
                    "name": "Human player high note?",
                    "type": "field"
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
