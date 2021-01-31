const express = require("express")
const app = express.Router()


app.get("/content/api/pages/fortnite-game/", async (req, res) => {
    var season
    if (req.headers["user-agent"]) {
        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
            if (season == 10) season = "x"
        } catch {
            season = 2
        }
    } else season = 2

    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenewsv2: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://cdn.discordapp.com/attachments/777041962565894175/804941952680198204/Untitled.png",
                        tileImage: "https://cdn.discordapp.com/attachments/777041962565894175/804948668783263744/Untitled_4.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "Y-Dev",
                        _type: "CommonUI Simple Message MOTD",
                        title: "Y-Dev",
                        body: "Welcome To Y-Dev A Fortnite Private Server Made by the (@YdevFN) team! We All Hope You Enjoy!!!",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `News`,
                        spotlight: false
                    }
                ]
            }
        },
        battleroyalenews: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://cdn.discordapp.com/attachments/777041962565894175/804941952680198204/Untitled.png",
                        tileImage: "https://cdn.discordapp.com/attachments/777041962565894175/804948668783263744/Untitled_4.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "Y-Dev",
                        _type: "CommonUI Simple Message MOTD",
                        title: "Y-Dev",
                        body: "Welcome To Y-Dev A Fortnite Private Server Made by the (@YdevFN) team! We All Hope You Enjoy!!!",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `News`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynoticev2: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "Y-Dev",
                        body: "Made by the (@YdevFN) team! We All Hope You Enjoy :)",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynoticev2",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "Y-Dev",
                        body: "Made by the (@YdevFN) team! We All Hope You Enjoy :)",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynoticev2",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
                        stage: `season${season}`,
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
                        stage: `season${season}`,
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        "shopSections": {
            "jcr:isCheckedOut": true,
            "_title": "shop-sections",
            "sectionList": {
                "_type": "ShopSectionList",
                "sections": [{
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 70,
                    "sectionId": "Featured",
                    "bShowTimer": true,
                    "sectionDisplayName": "Featured",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 69,
                    "sectionId": "Featured2",
                    "bShowTimer": false,
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 65,
                    "sectionId": "CustomizeHero",
                    "bShowTimer": true,
                    "sectionDisplayName": "Customize Your Hero!",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 64,
                    "sectionId": "HeroGear",
                    "bShowTimer": true,
                    "sectionDisplayName": "Hero Gear",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": false,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 65,
                    "sectionId": "BannerBrigade",
                    "bShowTimer": true,
                    "sectionDisplayName": "Banner Brigade",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 64,
                    "sectionId": "BannerGear",
                    "bShowTimer": true,
                    "sectionDisplayName": "Banner Gear",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 60,
                    "sectionId": "Daily",
                    "bShowTimer": true,
                    "sectionDisplayName": "Daily",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 59,
                    "sectionId": "Daily2",
                    "bShowTimer": true,
                    "sectionDisplayName": "",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 60,
                    "sectionId": "Special",
                    "bShowTimer": true,
                    "sectionDisplayName": "Special Offers",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 59,
                    "sectionId": "Special2",
                    "bShowTimer": true,
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 65,
                    "sectionId": "StarWars",
                    "bShowTimer": true,
                    "sectionDisplayName": "Star Wars",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 65,
                    "sectionId": "StartParty",
                    "bShowTimer": true,
                    "sectionDisplayName": "Start the Party!",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 64,
                    "sectionId": "PartyGear",
                    "bShowTimer": true,
                    "sectionDisplayName": "Party Gear",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 64,
                    "sectionId": "TurnMusicUp",
                    "bShowTimer": true,
                    "sectionDisplayName": "Turn the Music Up!",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 30,
                    "sectionId": "SpookyOffers",
                    "bShowTimer": true,
                    "sectionDisplayName": "Spooky Offers",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 29,
                    "sectionId": "SpookyOffers2",
                    "bShowTimer": true,
                    "sectionDisplayName": "",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 65,
                    "sectionId": "Fortnitemares",
                    "bShowTimer": true,
                    "sectionDisplayName": "Fortnitemares",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 65,
                    "sectionId": "Ghostbusters",
                    "bShowTimer": true,
                    "sectionDisplayName": "Ghostbusters",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 64,
                    "sectionId": "GhostbustersGear",
                    "bShowTimer": true,
                    "sectionDisplayName": "Ghostbusters Gear",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 40,
                    "sectionId": "Marvel",
                    "bShowTimer": true,
                    "sectionDisplayName": "Marvel",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 39,
                    "sectionId": "Marvel2",
                    "bShowTimer": true,
                    "sectionDisplayName": "",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 38,
                    "sectionId": "Marvel3",
                    "bShowTimer": true,
                    "sectionDisplayName": "",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "_type": "DynamicBackground"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 37,
                    "sectionId": "Marvel4",
                    "bShowTimer": true,
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "sectionId": "Bundles",
                    "bShowTimer": true,
                    "sectionDisplayName": "Bundles",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "sectionId": "Characters",
                    "bShowTimer": true,
                    "sectionDisplayName": "Outfits",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "sectionId": "Backpacks",
                    "bShowTimer": true,
                    "sectionDisplayName": "Back Blings",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 0,
                    "sectionId": "Pickaxes",
                    "bShowTimer": true,
                    "sectionDisplayName": "Harvesting Tools",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "sectionId": "Gliders",
                    "bShowTimer": true,
                    "sectionDisplayName": "Gliders",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "sectionId": "MusicPacks",
                    "bShowTimer": true,
                    "sectionDisplayName": "Music Packs",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "sectionId": "Wraps",
                    "bShowTimer": true,
                    "sectionDisplayName": "Wraps",
                    "bShowIneligibleOffers": true
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": true,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 80,
                    "sectionId": "LimitedTime",
                    "bShowTimer": false,
                    "sectionDisplayName": "Limited Time",
                    "bShowIneligibleOffers": false
                }, {
                    "bSortOffersByOwnership": false,
                    "bShowIneligibleOffersIfGiftable": false,
                    "bEnableToastNotification": false,
                    "background": {
                        "stage": "default",
                        "_type": "DynamicBackground",
                        "key": "vault"
                    },
                    "_type": "ShopSection",
                    "landingPriority": 90,
                    "sectionId": "Battlepass",
                    "bShowTimer": false,
                    "sectionDisplayName": "Battle Pass",
                    "bShowIneligibleOffers": true
                }]
            },
            "_noIndex": false,
            "jcr:baseVersion": "a7ca237317f1e77f7abaac-2b4d-4df8-828b-6056a1904470",
            "_activeDate": "2020-10-28T00:00:00.000Z",
            "lastModified": "2020-11-02T15:56:44.648Z",
            "_locale": "en-US"
        },
        lobby: {
            _activeDate: "2010-11-26T21:24:39.892Z",
            _locale: "en-US",
            _title: "lobby",
            backgroundimage: "https://cdn2.unrealengine.com/Fortnite/fortnite-game/lobby/T_Lobby_SeasonX-2048x1024-24e02780ed533da8001016f4e6fb14dd15e2f860.png",
            lastModified: "2010-11-26T21:24:39.892Z",
            stage: "season14"
        },
        "shopCarousel": {
            "jcr:isCheckedOut": true,
            "itemsList": {
                "_type": "ShopCarouselItemList",
                "items": [{
                    "tileImage": "https://cdn.discordapp.com/attachments/777418829570637865/781217516193972244/shop_1.png",
                    "fullTitle": "Y-Dev",
                    "hidden": false,
                    "_type": "ShopCarouselItem",
                    "landingPriority": 100,
                    "action": "ShowOfferDetails",
                    "offerId": "v2:/cc29bec6d0bdd2876fb412cf674a7960003bbb76b2eb9b930833a61b604a3b4e",
                    "title": "Y-Dev"
                }]
            },
            "_title": "shop-carousel",
            "_noIndex": false,
            "jcr:baseVersion": "a7ca237317f1e76d4c1405-e84c-4ece-bc50-7112ba557b33",
            "_activeDate": "2020-09-25T12:00:00.000Z",
            "lastModified": "2020-10-26T15:37:05.775Z",
            "_locale": "en-US"
        },
        "_suggestedPrefetch": []
    })
})


module.exports = app
