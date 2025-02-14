var jsonData = {
    "event": "test",
    "pages": [
        {
            "name": "Rankings",
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
                    "id": "match#",
                    "required": "yes",
                    "buttons": "no"
                },
                {
                    "name": "Alliance",
                    "type": "select",
                    "id": "alliance",
                    "required": "yes",
                    "file":"config/alliances.txt"
                },
                {
                    "name": "Rank 1",
                    "type": "select",
                    "required": "yes",
                    "id": "rank1",
                    "file": "config/teams.txt"
                },
                {
                    "name": "Rank 2",
                    "type": "select",
                    "required": "yes",
                    "id": "rank2",
                    "file": "config/teams.txt"
                },
                {
                    "name": "Rank 3",
                    "type": "select",
                    "required": "yes",
                    "id": "rank3",
                    "file": "config/teams.txt"
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