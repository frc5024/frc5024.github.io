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
                    "file": "config/names.txt"
                },
                {
                    "name": "Match #",
                    "type": "field",
                    "id": "matchNum",
                    "required": "yes",
                    "buttons": "no"
                },
                {
                    "name": "Team",
                    "type": "select",
                    "required": "yes",
                    "id": "teams",
                    "file": "config/teams.txt"
                },
            ]
        },
        {
            "name": "auto",
            "fields": [
                {
                    "name": "Climb",
                    "type": "checkbox",
                    "id":"2",
                    "required": "yes"
                },
                {
                    "name": "Score Preloaded Fuel",
                    "type": "checkbox",
                    "required": "yes",
                    "id": "3",
                },
                {
                    "name": "Picked Up Fuel in Neutral Zone",
                    "type": "checkbox",
                    "required": "yes",
                    "id": "3",
                },
                {
                    "name": "Picked Up Fuel in Alliance Zone",
                    "type": "checkbox",
                    "required": "yes",
                    "id": "3",
                },
            ]
        },
        {
            "name": "Tele-Op",
            "fields": [
                {
                    "name": "Fuel Scored",
                    "type": "radio",
                    "id":"4",
                    "required": "yes",
                    "options": ["<10", "10-50", "50-100", "100-200", "200+"]
                }
            ]
        },
        {
            "name": "End Game",
            "fields": [
                {
                    "name": "Climb Level",
                    "type": "select",
                    "required": "yes",
                    "id": "endgame",
                    "file": "config/endgame.txt"
                }
            ]
        },
        {
            "name": "Other",
            "fields": [
                {
                    "name": "Went Under Trench",
                    "type": "checkbox",
                    "id":"5",
                    "required": "yes"
                },
                {
                    "name": "Went Over Bump",
                    "type": "checkbox",
                    "id":"6",
                    "required": "yes"
                },
                {
                    "name": "Driver Ability",
                    "type": "select",
                    "required": "yes",
                    "id": "driver",
                    "file": "config/driver.txt"
                },
                {
                    "name": "Robot Died",
                    "type": "checkbox",
                    "id":"8",
                    "required": "yes"
                },
                {
                    "name": "Did Not Play",
                    "type": "checkbox",
                    "id":"9",
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