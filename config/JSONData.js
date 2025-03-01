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
                    "name": "Left Starting Line",
                    "type": "checkbox",
                    "id":"2",
                    "required": "yes"
                },
                {
                    "name": "Coral L4",
                    "type": "field",
                    "required": "no",
                    "id": "autoL4",
                    "buttons": "yes"
                },
                {
                    "name": "Coral L3",
                    "type": "field",
                    "required": "no",
                    "id": "autoL3",
                    "buttons": "yes"
                },
                {
                    "name": "Coral L2",
                    "type": "field",
                    "required": "no",
                    "id": "autoL2",
                    "buttons": "yes"
                },
                {
                    "name": "Coral L1",
                    "type": "field",
                    "required": "no",
                    "id": "autoL1",
                    "buttons": "yes"
                },
                {
                    "name": "Algae Processor",
                    "type": "field",
                    "required": "no",
                    "id": "autoProcessor",
                    "buttons": "yes"
                },
                {
                    "name": "Algae Net",
                    "type": "field",
                    "required": "no",
                    "id": "autoNet",
                    "buttons": "yes"
                },    
            ]
        },
        {
            "name": "Tele-Op",
            "fields": [
                {
                    "name": "Crossed Barge",
                    "type": "checkbox",
                    "id":"4",
                    "required": "yes"
                }, 
                {
                    "name": "Coral L4",
                    "type": "field",
                    "required": "no",
                    "id": "teleL4",
                    "buttons": "yes"
                },
                {
                    "name": "Coral L3",
                    "type": "field",
                    "required": "no",
                    "id": "teleL3",
                    "buttons": "yes"
                },
                {
                    "name": "Coral L2",
                    "type": "field",
                    "required": "no",
                    "id": "teleL2",
                    "buttons": "yes"
                },
                {
                    "name": "Coral L1",
                    "type": "field",
                    "required": "no",
                    "id": "teleL1",
                    "buttons": "yes"
                },
                {
                    "name": "Algae Processor",
                    "type": "field",
                    "required": "no",
                    "id": "teleProcessor",
                    "buttons": "yes"
                },
                {
                    "name": "Algae Net",
                    "type": "field",
                    "required": "no",
                    "id": "teleNet",
                    "buttons": "yes"
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
                    "file": "config/endgame.txt"
                }
            ]
        },
        {
            "name": "Other",
            "fields": [
                {
                    "name": "Defense Capability",
                    "type": "select",
                    "required": "yes",
                    "id": "defense",
                    "file": "config/defense.txt"
                },
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