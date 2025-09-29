
const staticData = [
    {
        "property_id": "unique_id_001",
        "attributes": {
            "color": "blue",
            "number_of_rooms": 6,
            "number_of_bathrooms": 2,
            "kitchen_type": "kitchenette",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 30,
            "floor_level": 17,
            "location": {
                "address": "36 Bağcılar Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_002",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 6,
            "number_of_bathrooms": 2,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 19,
            "floor_level": 15,
            "location": {
                "address": "88 Eyüpsultan Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_003",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 6,
            "number_of_bathrooms": 1,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 3,
            "floor_level": 11,
            "location": {
                "address": "92 Beyoğlu Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_004",
        "attributes": {
            "color": "beige",
            "number_of_rooms": 5,
            "number_of_bathrooms": 2,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 28,
            "floor_level": 17,
            "location": {
                "address": "3 Kağıthane Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_005",
        "attributes": {
            "color": "beige",
            "number_of_rooms": 5,
            "number_of_bathrooms": 3,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 5,
            "floor_level": 20,
            "location": {
                "address": "89 Maltepe Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_006",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 5,
            "number_of_bathrooms": 3,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 41,
            "floor_level": 5,
            "location": {
                "address": "9 Küçükçekmece Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_007",
        "attributes": {
            "color": "blue",
            "number_of_rooms": 4,
            "number_of_bathrooms": 3,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 4,
            "floor_level": 1,
            "location": {
                "address": "15 Ataşehir Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_008",
        "attributes": {
            "color": "green",
            "number_of_rooms": 5,
            "number_of_bathrooms": 3,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 41,
            "floor_level": 8,
            "location": {
                "address": "32 Üsküdar Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_009",
        "attributes": {
            "color": "red",
            "number_of_rooms": 3,
            "number_of_bathrooms": 1,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 50,
            "floor_level": 20,
            "location": {
                "address": "77 Bakırköy Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_010",
        "attributes": {
            "color": "red",
            "number_of_rooms": 2,
            "number_of_bathrooms": 1,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 8,
            "floor_level": 12,
            "location": {
                "address": "44 Eyüpsultan Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_011",
        "attributes": {
            "color": "white",
            "number_of_rooms": 5,
            "number_of_bathrooms": 3,
            "kitchen_type": "kitchenette",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 13,
            "floor_level": 7,
            "location": {
                "address": "43 Zeytinburnu Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_012",
        "attributes": {
            "color": "blue",
            "number_of_rooms": 2,
            "number_of_bathrooms": 1,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 46,
            "floor_level": 4,
            "location": {
                "address": "100 Bağcılar Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_013",
        "attributes": {
            "color": "white",
            "number_of_rooms": 1,
            "number_of_bathrooms": 1,
            "kitchen_type": "open-plan",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 20,
            "floor_level": 9,
            "location": {
                "address": "34 Eyüpsultan Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_014",
        "attributes": {
            "color": "green",
            "number_of_rooms": 3,
            "number_of_bathrooms": 2,
            "kitchen_type": "open-plan",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 9,
            "floor_level": 4,
            "location": {
                "address": "98 Gaziosmanpaşa Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_015",
        "attributes": {
            "color": "green",
            "number_of_rooms": 5,
            "number_of_bathrooms": 1,
            "kitchen_type": "kitchenette",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 3,
            "floor_level": 14,
            "location": {
                "address": "44 Beyoğlu Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_016",
        "attributes": {
            "color": "red",
            "number_of_rooms": 3,
            "number_of_bathrooms": 1,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 25,
            "floor_level": 2,
            "location": {
                "address": "65 Çekmeköy Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_017",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 2,
            "number_of_bathrooms": 2,
            "kitchen_type": "open-plan",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 38,
            "floor_level": 4,
            "location": {
                "address": "1 Esenyurt Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_018",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 4,
            "number_of_bathrooms": 2,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 40,
            "floor_level": 5,
            "location": {
                "address": "98 Beyoğlu Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_019",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 2,
            "number_of_bathrooms": 2,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 10,
            "floor_level": 6,
            "location": {
                "address": "3 Şişli Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_020",
        "attributes": {
            "color": "yellow",
            "number_of_rooms": 1,
            "number_of_bathrooms": 2,
            "kitchen_type": "modern",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 7,
            "floor_level": 6,
            "location": {
                "address": "15 Bağcılar Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_021",
        "attributes": {
            "color": "red",
            "number_of_rooms": 4,
            "number_of_bathrooms": 1,
            "kitchen_type": "modern",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 31,
            "floor_level": 17,
            "location": {
                "address": "7 Başakşehir Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_022",
        "attributes": {
            "color": "red",
            "number_of_rooms": 6,
            "number_of_bathrooms": 1,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 5,
            "floor_level": 12,
            "location": {
                "address": "91 Çekmeköy Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_023",
        "attributes": {
            "color": "yellow",
            "number_of_rooms": 4,
            "number_of_bathrooms": 1,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 11,
            "floor_level": 10,
            "location": {
                "address": "93 Kağıthane Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_024",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 1,
            "number_of_bathrooms": 1,
            "kitchen_type": "open-plan",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 43,
            "floor_level": 2,
            "location": {
                "address": "17 Kartal Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_025",
        "attributes": {
            "color": "red",
            "number_of_rooms": 5,
            "number_of_bathrooms": 2,
            "kitchen_type": "modern",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 46,
            "floor_level": 8,
            "location": {
                "address": "84 Bakırköy Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_026",
        "attributes": {
            "color": "green",
            "number_of_rooms": 3,
            "number_of_bathrooms": 3,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 43,
            "floor_level": 7,
            "location": {
                "address": "4 Beyoğlu Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_027",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 5,
            "number_of_bathrooms": 2,
            "kitchen_type": "classic",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 9,
            "floor_level": 2,
            "location": {
                "address": "6 Gaziosmanpaşa Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_028",
        "attributes": {
            "color": "blue",
            "number_of_rooms": 5,
            "number_of_bathrooms": 2,
            "kitchen_type": "open-plan",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 33,
            "floor_level": 7,
            "location": {
                "address": "35 Maltepe Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_029",
        "attributes": {
            "color": "white",
            "number_of_rooms": 6,
            "number_of_bathrooms": 3,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 50,
            "floor_level": 8,
            "location": {
                "address": "22 Küçükçekmece Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_030",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 1,
            "number_of_bathrooms": 1,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 8,
            "floor_level": 4,
            "location": {
                "address": "16 Kartal Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_031",
        "attributes": {
            "color": "red",
            "number_of_rooms": 2,
            "number_of_bathrooms": 2,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 12,
            "floor_level": 15,
            "location": {
                "address": "75 Üsküdar Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_032",
        "attributes": {
            "color": "blue",
            "number_of_rooms": 5,
            "number_of_bathrooms": 3,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 46,
            "floor_level": 20,
            "location": {
                "address": "68 Sarıyer Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_033",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 4,
            "number_of_bathrooms": 2,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 44,
            "floor_level": 7,
            "location": {
                "address": "58 Sancaktepe Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_034",
        "attributes": {
            "color": "green",
            "number_of_rooms": 5,
            "number_of_bathrooms": 2,
            "kitchen_type": "modern",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 18,
            "floor_level": 3,
            "location": {
                "address": "44 Maltepe Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_035",
        "attributes": {
            "color": "yellow",
            "number_of_rooms": 2,
            "number_of_bathrooms": 1,
            "kitchen_type": "modern",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 18,
            "floor_level": 6,
            "location": {
                "address": "89 Çekmeköy Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_036",
        "attributes": {
            "color": "white",
            "number_of_rooms": 1,
            "number_of_bathrooms": 2,
            "kitchen_type": "classic",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 35,
            "floor_level": 20,
            "location": {
                "address": "70 Gaziosmanpaşa Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_037",
        "attributes": {
            "color": "white",
            "number_of_rooms": 4,
            "number_of_bathrooms": 2,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 17,
            "floor_level": 19,
            "location": {
                "address": "92 Başakşehir Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_038",
        "attributes": {
            "color": "yellow",
            "number_of_rooms": 1,
            "number_of_bathrooms": 2,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 15,
            "floor_level": 17,
            "location": {
                "address": "67 Esenyurt Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_039",
        "attributes": {
            "color": "yellow",
            "number_of_rooms": 1,
            "number_of_bathrooms": 2,
            "kitchen_type": "kitchenette",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 26,
            "floor_level": 11,
            "location": {
                "address": "90 Beşiktaş Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_040",
        "attributes": {
            "color": "green",
            "number_of_rooms": 6,
            "number_of_bathrooms": 2,
            "kitchen_type": "classic",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 5,
            "floor_level": 6,
            "location": {
                "address": "69 Eyüpsultan Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_041",
        "attributes": {
            "color": "red",
            "number_of_rooms": 3,
            "number_of_bathrooms": 3,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 3,
            "floor_level": 12,
            "location": {
                "address": "100 Başakşehir Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_042",
        "attributes": {
            "color": "red",
            "number_of_rooms": 3,
            "number_of_bathrooms": 3,
            "kitchen_type": "kitchenette",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 4,
            "floor_level": 19,
            "location": {
                "address": "37 Maltepe Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_043",
        "attributes": {
            "color": "green",
            "number_of_rooms": 2,
            "number_of_bathrooms": 3,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 35,
            "floor_level": 19,
            "location": {
                "address": "83 Başakşehir Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_044",
        "attributes": {
            "color": "blue",
            "number_of_rooms": 6,
            "number_of_bathrooms": 1,
            "kitchen_type": "modern",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": false,
            "building_age": 3,
            "floor_level": 16,
            "location": {
                "address": "44 Esenyurt Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_045",
        "attributes": {
            "color": "yellow",
            "number_of_rooms": 1,
            "number_of_bathrooms": 3,
            "kitchen_type": "open-plan",
            "has_garage": false,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 38,
            "floor_level": 8,
            "location": {
                "address": "13 Bağcılar Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_046",
        "attributes": {
            "color": "green",
            "number_of_rooms": 6,
            "number_of_bathrooms": 1,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 47,
            "floor_level": 10,
            "location": {
                "address": "45 Bakırköy Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_047",
        "attributes": {
            "color": "gray",
            "number_of_rooms": 4,
            "number_of_bathrooms": 2,
            "kitchen_type": "kitchenette",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 34,
            "floor_level": 2,
            "location": {
                "address": "97 Fatih Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_048",
        "attributes": {
            "color": "white",
            "number_of_rooms": 3,
            "number_of_bathrooms": 1,
            "kitchen_type": "open-plan",
            "has_garage": true,
            "has_natural_gas": false,
            "has_underfloor_heating": true,
            "building_age": 2,
            "floor_level": 1,
            "location": {
                "address": "49 Zeytinburnu Street, Istanbul",
                "is_central_location": false
            }
        }
    },
    {
        "property_id": "unique_id_049",
        "attributes": {
            "color": "  ",
            "number_of_rooms": 6,
            "number_of_bathrooms": 2,
            "kitchen_type": "kitchenette",
            "has_garage": false,
            "has_natural_gas": true,
            "has_underfloor_heating": true,
            "building_age": 48,
            "floor_level": 4,
            "location": {
                "address": "73 Başakşehir Street, Istanbul",
                "is_central_location": true
            }
        }
    },
    {
        "property_id": "unique_id_050",
        "attributes": {
            "color": "white",
            "number_of_rooms": 4,
            "number_of_bathrooms": 1,
            "kitchen_type": "modern",
            "has_garage": true,
            "has_natural_gas": true,
            "has_underfloor_heating": false,
            "building_age": 47,
            "floor_level": 4,
            "location": {
                "address": "25 Şişli Street, Istanbul",
                "is_central_location": true
            }
        }
    }
]

module.exports = staticData;


