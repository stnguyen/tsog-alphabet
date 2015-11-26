ROOM_OBJECT_POSITIONS = [];
FOREST_OBJECT_POSITIONS = [];
FOREST_BACKGROUND_POSITIONS = [];

var BEDROOM_ID = 0;
var FOREST_ID = 1;
var BEDROOM_SHADE_ID = 2;
var FOREST_BACKGROUND_ID = 3;

var BEDROOM_ITEMS = [];
var BEDROOM_LIGHTWEIGHT_ITEMS_POSITION = [];
var BEDROOM_HEAVYWEIGHT_ITEMS_POSITION = [];
var BEDROOM_ITEMS_POSITION = []
var FOREST_ITEMS = [];
var FOREST_FLY_POSITION = [];
var FOREST_BIRD_POSITION = [];
var FOREST_GROUND_POSITION = [];
var FOREST_WATER_POSITION = [];
var FOREST_MONKEY_POSITION = [];
var FOREST_OWL_POSITION = [];
var FOREST_FROG_POSITION = []; 
var FOREST_NEST_POSITION = [];
var FOREST_OCTOPUS_POSITION = [];
var FOREST_DOLPHIN_POSITION = [];
var FOREST_SNAIL_POSITION = [];
var FOREST_CROCODILE_POSITION = [];
var FOREST_EAGLE_POSITION = [];
var FOREST_SHARK_POSITION = [];
var FOREST_BACKGROUND_ITEMS_POSITION = [
    {
        x: 668,
        y: 540,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#cloud-1.png",
        z: 0
    },
    {
        x: 468,
        y: 570,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#cloud-3.png",
        z: 0
    },
    {
        x: 0,
        y: 520,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#cloud-4.png",
        z: 0
    },
    {
        x: 1136,
        y: 210,
        anchorX: 1,
        anchorY: 0.5,
        imageName: "#river.png",
        z: 1
    },
    {
        x: 0,
        y: 200,
        anchorX: 0,
        anchorY: 0,
        imageName: "#water-fall.png",
        z: 1 },
    {
        x: 0,
        y: 0,
        anchorX: 0,
        anchorY: 0,
        imageName: "#ground.png",
        z: 4
    },
    {
        x: 488,
        y: 270,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#tree-shadow.png",
        z: 5
    },
    {
        x: 488,
        y: 270,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#tree-1.png",
        z: 5
    },
    {
        x: 299,
        y: 370,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#tree-2.png",
        z: 3
    },
    {
        x: 407,
        y: 380,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#tree-3.png",
        z: 2
    },
    {
        x: 1136,
        y: 340,
        anchorX: 1,
        anchorY: 0.5,
        imageName: "#tree-4.png",
        z: 5
    },
    {
        x: 1136,
        y: 320,
        anchorX: 1,
        anchorY: 0.5,
        imageName: "#tree-5.png",
        z: 2
    },
    {
        x: 0,
        y: 76,
        anchorX: 0,
        anchorY: 0.5,
        imageName: "#bush-1.png",
        z: 10
    },
    {
        x: 868,
        y: 104,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#bush-2.png",
        z: 10
    },
    {
        x: 485,
        y: 120,
        anchorX: 0.5,
        anchorY: 0.5,
        imageName: "#small-bush-1.png",
        z: 6
    },
    {
        x: 0,
        y: 240,
        anchorX: 0,
        anchorY: 0.5,
        imageName: "#small-bush-2.png",
        z: 6
    }
];

var GAME_CONFIG = {};

var ConfigStore = cc.Class.extend({
    positionSets: [],
    objectSets: [],

    ctor: function() {
        this._fillDataStore();
    },

    _addPosition: function(setId, x, y, anchorX, anchorY, imageName, z) {
        var posArray = this.positionSets[setId];

        if (anchorX == undefined)
            anchorX = 0.5;
        if (anchorY == undefined)
            anchorY = 0;
        if (imageName == undefined)
            imageName = "";
        if (z == undefined)
            z = 0;

        var obj = {
            x: x,
            y: y,
            anchorX: anchorX,
            anchorY: anchorY,
            imageName: imageName,
            z: z
        }
        posArray.push(obj);
    },

    _addObject: function(setId, item) {
        var objArray = this.objectSets[setId];
        var imageName = item.imageName;
        var correctPos = cc.p(item.x, item.y)
        var anchorPoint = cc.p(item.anchorX, item.anchorY);
        var type = item.type;
        if (imageName == undefined)
            imageName = "";
        if (type == undefined)
            type = 0;
        if (correctPos == undefined)
            correctPos = cc.p(0,0);
        if (anchorPoint == undefined)
            anchorPoint = cc.p(0.5,0.5);

        var obj = {
            imageName: imageName,
            correctPos: correctPos,
            anchorPoint: anchorPoint,
            type: type
        };
        objArray.push(obj);
    },

    _fillDataStore: function() {
        // ------------------------------ BED ROOM
        this.positionSets[BEDROOM_ID] = [];
        this.objectSets[BEDROOM_ID] = [];

        for ( var i = 0; i < BEDROOM_ITEMS.length; i++) {
            this._addObject(BEDROOM_ID, BEDROOM_ITEMS[i])
        }
        // ------------------------------ FOREST
        this.positionSets[FOREST_ID] = [];
        this.objectSets[FOREST_ID] = [];

        for ( var i = 0; i < FOREST_ITEMS.length; i++) {
            this._addObject(FOREST_ID, FOREST_ITEMS[i]);
        }
        // ------------------------------ FOREST BACKGROUND
        this.positionSets[FOREST_BACKGROUND_ID] = [];
        this.objectSets[FOREST_BACKGROUND_ID] = [];
        //add position
        for ( var i = 0; i < FOREST_BACKGROUND_ITEMS_POSITION.length; i++) {
            var itemsPos = FOREST_BACKGROUND_ITEMS_POSITION[i];
            this._addPosition(FOREST_BACKGROUND_ID,
                itemsPos.x,
                itemsPos.y,
                itemsPos.anchorX,
                itemsPos.anchorY,
                itemsPos.imageName,
                itemsPos.z);
        }
    },

    getPositions: function(setId) {
        return this.positionSets[setId];
    },

    getObjects: function(setId) {
        return this.objectSets[setId];
    },

    getRandomItems: function(array, setId, numItems) {
        var items = array[setId];
        var shuffledItems = shuffle(items);
        var randomedItems = [];
        for ( i = 0; i < numItems; i++)
            randomedItems.push(shuffledItems[i]);

        return randomedItems;
    },

    getRandomPositions: function(setId, numItems) {
        return this.getRandomItems(this.positionSets, setId, numItems);
    },

    getRandomObjects: function(setId, numItems) {
        return this.getRandomItems(this.objectSets, setId, numItems);
    }
});

ConfigStore._instance = null;

ConfigStore.getInstance = function () {
  return ConfigStore._instance || ConfigStore.setupInstance(false);
};

ConfigStore.setupInstance = function (configOnce) {
    var forestLoaded = false, roomLoaded = false;

    cc.loader.loadJson(res.Forest_Config_JSON, function(err, data) {
        if (!err) {
            FOREST_ITEMS = data.items;
            FOREST_WATER_POSITION = preProcessData(data.water);
            FOREST_GROUND_POSITION = preProcessData(data.ground);
            FOREST_BIRD_POSITION = preProcessData(data.bird);
            FOREST_FROG_POSITION = preProcessData(data.frog);
            FOREST_OWL_POSITION = preProcessData(data.owl);
            FOREST_MONKEY_POSITION = preProcessData(data.monkey);
            FOREST_NEST_POSITION = preProcessData(data.nest);
            FOREST_OCTOPUS_POSITION = preProcessData(data.octopus);
            FOREST_DOLPHIN_POSITION = preProcessData(data.dolphin);
            FOREST_SNAIL_POSITION = preProcessData(data.snail);
            FOREST_CROCODILE_POSITION = preProcessData(data.crocodile);
            FOREST_FLY_POSITION = preProcessData(data.fly);
            FOREST_EAGLE_POSITION = preProcessData(data.eagle);
            FOREST_SHARK_POSITION = preProcessData(data.shark);



            forestLoaded = true;
        } else {
            cc.fileUtils.removeFile(Utils.getAssetsManagerPath() + res.Forest_Config_JSON);
            cc.loader.loadJson(res.Forest_Config_JSON, function(err, data) {
                FOREST_ITEMS = data.items;
                FOREST_WATER_POSITION = preProcessData(data.water);
                FOREST_GROUND_POSITION = preProcessData(data.ground);
                FOREST_FLY_POSITION = preProcessData(data.fly);
                FOREST_FROG_POSITION = preProcessData(data.frog);
                FOREST_OWL_POSITION = preProcessData(data.owl);
                FOREST_MONKEY_POSITION = preProcessData(data.monkey);
                FOREST_NEST_POSITION = preProcessData(data.nest);
                FOREST_OCTOPUS_POSITION = preProcessData(data.octopus);
                FOREST_DOLPHIN_POSITION = preProcessData(data.dolphin);
                FOREST_SNAIL_POSITION = preProcessData(data.snail);
                FOREST_CROCODILE_POSITION = preProcessData(data.crocodile);
                FOREST_BIRD_POSITION = preProcessData(data.bird);
                FOREST_EAGLE_POSITION = preProcessData(data.eagle);
                FOREST_SHARK_POSITION = preProcessData(data.shark);
                forestLoaded = true;
            });
        }
    });

    cc.loader.loadJson(res.Room_Config_JSON, function(err, data) {
        if (!err) {
            BEDROOM_ITEMS = preProcessData(data.items);
            BEDROOM_LIGHTWEIGHT_ITEMS_POSITION = preProcessData(data.lightweight);
            BEDROOM_HEAVYWEIGHT_ITEMS_POSITION = preProcessData(data.heavyweight);

            BEDROOM_ITEMS_POSITION = BEDROOM_LIGHTWEIGHT_ITEMS_POSITION.concat(BEDROOM_HEAVYWEIGHT_ITEMS_POSITION);

            roomLoaded = true;
        } else {
            cc.fileUtils.removeFile(Utils.getAssetsManagerPath() + res.Room_Config_JSON);
            cc.loader.loadJson(res.Room_Config_JSON, function(err, data) {
                BEDROOM_ITEMS = preProcessData(data.items);
                BEDROOM_LIGHTWEIGHT_ITEMS_POSITION = preProcessData(data.lightweight);
                BEDROOM_HEAVYWEIGHT_ITEMS_POSITION = preProcessData(data.heavyweight);
                BEDROOM_ITEMS_POSITION = BEDROOM_LIGHTWEIGHT_ITEMS_POSITION.concat(BEDROOM_HEAVYWEIGHT_ITEMS_POSITION);

                roomLoaded = true;
            });
        }
    });
    
    GAME_CONFIG = KVDatabase.getInstance().getString(STRING_GAME_CONFIG);
    try {
        GAME_CONFIG = JSON.parse(GAME_CONFIG);
    } catch(e) {
        GAME_CONFIG = "";
    }

    if (GAME_CONFIG == "") {
        cc.loader.loadJson(res.Game_Config_JSON, function(err, data) {
            if (!err) {
                GAME_CONFIG = data;
            } else {
                cc.fileUtils.removeFile(Utils.getAssetsManagerPath() + res.Game_Config_JSON);
                cc.loader.loadJson(res.Game_Config_JSON, function(err, data) {
                    GAME_CONFIG = data;
                });
            }
        });
    }

    if (configOnce) {
        preProcessData(FOREST_BACKGROUND_ITEMS_POSITION);
    }

    while(forestLoaded && roomLoaded) {
        ConfigStore._instance = new ConfigStore();
        return ConfigStore._instance;
    }
};

function preProcessData(data) {
    for (var i = 0; i < data.length; i++) {
        data[i].x = data[i].x / 1136 * cc.winSize.width;
        data[i].y = data[i].y / 640 * (cc.winSize.width / 16 * 9);
    }

    return data;
} 