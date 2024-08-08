var APP_DATA = {
  "scenes": [
    {
      "id": "0-vhod",
      "name": "Vhod",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.8956234729868164,
        "pitch": 0.16934217322166845,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.8570288687325167,
          "pitch": 0.1432333516020332,
          "rotation": 0,
          "target": "1-recepcija"
        },
        {
          "yaw": -2.1795623249145564,
          "pitch": 0.0913766789641084,
          "rotation": 0,
          "target": "2-stopnie-recepcija"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-recepcija",
      "name": "Recepcija",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.5009058997904674,
        "pitch": 0.15650406381436,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.04350160573763873,
          "pitch": 0.14109646340664028,
          "rotation": 0,
          "target": "0-vhod"
        },
        {
          "yaw": -0.75621047155132,
          "pitch": 0.12157338783225846,
          "rotation": 0,
          "target": "2-stopnie-recepcija"
        },
        {
          "yaw": -0.9847330140418471,
          "pitch": 0.11607831146038095,
          "rotation": 5.497787143782138,
          "target": "3-dnevna-soba-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stopnie-recepcija",
      "name": "Stopnišče Recepcija",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.9479279992150502,
        "pitch": 0.047640118440138934,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.779053949920918,
          "pitch": 0.33606481040269287,
          "rotation": 0,
          "target": "3-dnevna-soba-1"
        },
        {
          "yaw": -0.5576594053136752,
          "pitch": 0.11047102317772683,
          "rotation": 0,
          "target": "0-vhod"
        },
        {
          "yaw": 0.47047010064068395,
          "pitch": 0.2073575518324695,
          "rotation": 0,
          "target": "1-recepcija"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dnevna-soba-1",
      "name": "Dnevna Soba 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.6787603462667775,
        "pitch": 0.2089536415207114,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.211673030054735,
          "pitch": 0.067010629067223,
          "rotation": 0,
          "target": "4-dnevna-soba-2"
        },
        {
          "yaw": 2.8879818427724073,
          "pitch": 0.05456688439668156,
          "rotation": 0,
          "target": "2-stopnie-recepcija"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dnevna-soba-2",
      "name": "Dnevna Soba 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.1629803173721687,
        "pitch": 0.1591898131644669,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.124863825604976,
          "pitch": 0.11559752868076245,
          "rotation": 0,
          "target": "3-dnevna-soba-1"
        },
        {
          "yaw": -0.523105324383847,
          "pitch": 0.18100287913082802,
          "rotation": 0,
          "target": "5-dnevna-2-stopnie-savna"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dnevna-2-stopnie-savna",
      "name": "Dnevna 2/ Stopnišče savna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.2954298159732005,
        "pitch": 0.044588709787033665,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.45590724387498227,
          "pitch": 0.07654646800516929,
          "rotation": 3.9269908169872414,
          "target": "6-stopnie-savna-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stopnie-savna-",
      "name": "Stopnišče Savna ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.315778789794509,
        "pitch": 0.8058558438366443,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.8384857603988216,
          "pitch": -0.23289002435342354,
          "rotation": 0.7853981633974483,
          "target": "5-dnevna-2-stopnie-savna"
        },
        {
          "yaw": -2.2436294781726946,
          "pitch": 0.8604769534056,
          "rotation": 5.497787143782138,
          "target": "7-stopnie-savna-klet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stopnie-savna-klet",
      "name": "Stopnišče Savna klet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.2361692771087363,
        "pitch": 0.17966141428644278,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.8809671525539997,
          "pitch": -0.01751363939908046,
          "rotation": 0.7853981633974483,
          "target": "6-stopnie-savna-"
        },
        {
          "yaw": -0.9811003757356236,
          "pitch": 0.15025043740489075,
          "rotation": 5.497787143782138,
          "target": "8-savna-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-savna-1",
      "name": "Savna 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.415101157712785,
        "pitch": -0.04505437269084567,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5707937269764898,
          "pitch": 0.09672030231614137,
          "rotation": 6.283185307179586,
          "target": "7-stopnie-savna-klet"
        },
        {
          "yaw": 1.0469743324758412,
          "pitch": 0.07461078118380016,
          "rotation": 6.283185307179586,
          "target": "9-savna-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-savna-2",
      "name": "Savna 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.138941674818259,
        "pitch": 0.1665621829194901,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.916613281252065,
          "pitch": 0.42187252656528784,
          "rotation": 0,
          "target": "8-savna-1"
        },
        {
          "yaw": -1.3278297405249333,
          "pitch": 0.16389422411745969,
          "rotation": 0,
          "target": "10-savna-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-savna-3",
      "name": "Savna 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9106920409644648,
        "pitch": 0.2534369707615056,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.1872679408613003,
          "pitch": 0.16002603792646752,
          "rotation": 0,
          "target": "9-savna-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
