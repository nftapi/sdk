module.exports = {
    "scalars": [
        1,
        4,
        7,
        10
    ],
    "types": {
        "Attribute": {
            "trait": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "AggregateAttrbute": {
            "trait": [
                1
            ],
            "values": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "AggregateAttrbuteValue": {
            "value": [
                1
            ],
            "count": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "Contract": {
            "id": [
                1
            ],
            "createdAt": [
                1
            ],
            "updatedAt": [
                1
            ],
            "address": [
                1
            ],
            "name": [
                1
            ],
            "symbol": [
                1
            ],
            "totalSupply": [
                4
            ],
            "mintSupply": [
                4
            ],
            "token": [
                6,
                {
                    "tokenId": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "tokens": [
                6,
                {
                    "skip": [
                        4
                    ],
                    "limit": [
                        4
                    ],
                    "order": [
                        1
                    ]
                }
            ],
            "attributes": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Token": {
            "id": [
                1
            ],
            "tokenId": [
                4
            ],
            "createdAt": [
                1
            ],
            "updatedAt": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "image": [
                1
            ],
            "thumbnailImage": [
                1
            ],
            "position": [
                4
            ],
            "avgRarity": [
                7
            ],
            "statRarity": [
                7
            ],
            "openseaUrl": [
                1
            ],
            "attributes": [
                0
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "Query": {
            "listContracts": [
                5,
                {
                    "address": [
                        1,
                        "[String]"
                    ],
                    "skip": [
                        4
                    ],
                    "limit": [
                        4
                    ],
                    "order": [
                        1
                    ]
                }
            ],
            "getContract": [
                5,
                {
                    "address": [
                        1,
                        "String!"
                    ]
                }
            ],
            "subscribeContract": [
                5,
                {
                    "address": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "addContract": [
                5,
                {
                    "address": [
                        1,
                        "String!"
                    ]
                }
            ],
            "reindex": [
                10,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "tokenIds": [
                        4,
                        "[Int]"
                    ]
                }
            ],
            "reaggregate": [
                10,
                {
                    "address": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "Subscription": {
            "subscribeContract": [
                5,
                {
                    "address": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        }
    }
}