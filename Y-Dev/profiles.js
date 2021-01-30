const User = require("./model") 
const caching = require("./caching")

module.exports = {
    commoncore(id) {
        var final = {
            "changeType": "fullProfileUpdate",
            "profile": {
                "_id": id,
                "created": new Date(),
                "updated": new Date(),
                "rvn": 1,
                "wipeNumber": 1,
                "id": id,
                "profileId": "common_core",
                "version": "Penis",
                "items": {
                    "Currency:MtxPurchased": {
                        "attributes": {
                            "platform": "EpicPC"
                        },
                        "quantity": 69420,
                        "templateId": "Currency:MtxPurchased"
                    }
                },
                "stats": {
                    "survey_data": {
                        "allSurveysMetadata": {},
                        "metadata": {}
                    },
                    "personal_offers": {},
                    "intro_game_played": true,
                    "mtx_purchase_history": {
                        "refundsUsed": 0,
                        "refundCredits": 69,
                        "purchases": []
                    },
                    "undo_cooldowns": [],
                    "import_friends_claimed": {},
                    "mtx_affiliate_set_time": new Date(),
                    "inventory_limit_bonus": 0,
                    "current_mtx_platform": "EpicPC",
                    "mtx_affiliate": "Y-dev is cool",
                    "weekly_purchases": {},
                    "daily_purchases": {},
                    "ban_history": {},
                    "in_app_purchases": {
                        "receipts": [],
                        "ignoredReceipts": [],
                        "fulfillmentCounts": {}
                    },
                    "undo_timeout": new Date(),
                    "permissions": [],
                    "monthly_purchases": {
                        "lastInterval": new Date(),
                        "purchaseList": {}
                    },
                    "allowed_to_send_gifts": true,
                    "mfa_enabled": true,
                    "allowed_to_receive_gifts": true,
                    "gift_history": {
                        "num_sent": 0,
                        "sentTo": {},
                        "num_received": 0,
                        "receivedFrom": {},
                        "gifts": []
                    }
                }
            }
        }

        caching.getBanners().forEach(banner => {
            final.profile.items[`HomebaseBannerIcon:${banner.toLowerCase()}`] = {
                "templateId": `HomebaseBannerIcon:${banner.toLowerCase()}`,
                "attributes": {
                    "item_seen": true
                },
                "quantity": 1
            }
        })

        caching.getBannerColors().forEach(banner => {
            final.profile.items[`HomebaseBannerColor:${banner.toLowerCase()}`] = {
                "templateId": `HomebaseBannerColor:${banner.toLowerCase()}`,
                "attributes": {
                    "item_seen": true
                },
                "quantity": 1
            }
        })

        
        
        return final
    },

    async athena(id) {
        var user = await User.findOne({id: id})

        var final = {
            "changeType": "fullProfileUpdate",
            "profile": {
                "_id": id,
                "created": new Date(),
                "updated": new Date(),
                "rvn": 1,
                "wipeNumber": 1,
                "id": id,
                "profileId": "athena",
                "version": "Y-dev",
                "items": {                    
                    "CosmeticLocker:cosmeticlocker_athena1": {
                        "templateId": "CosmeticLocker:cosmeticlocker_athena",
                        "attributes": {
                            "locker_slots_data": {
                                "slots":  {
                                    "Glider": {
                                        "items": [
                                            user.gilder
                                        ]
                                    },
                                    "Dance": {
                                        "items": user.dance,
                                    },
                                    "SkyDiveContrail": {
                                        "items": [
                                            user.skydivecontrail,
                                        ]
                                    },
                                    "LoadingScreen": {
                                        "items": [
                                            user.loadingscreen,
                                        ]
                                    },
                                    "Pickaxe": {
                                        "items": [
                                            user.pickaxe,
                                        ],
                                        "activeVariants": []
                                    },
                                    "ItemWrap": {
                                        "items": user.itemwrap,
                                    },
                                    "MusicPack": {
                                        "items": [
                                            user.musicpack
                                        ]
                                    },
                                    "Character": {
                                        "items": [
                                            user.character
                                        ],
                                        "activeVariants": []
                                    },
                                    "Backpack": {
                                        "items": [
                                            user.backpack
                                        ],
                                        "activeVariants": []
                                    }
                                }
                            },
                            "use_count": 0,
                            "banner_icon_template": user.banner,
                            "banner_color_template": user.bannercolor,
                            "locker_name": user.lockerName,
                            "item_seen": false,
                            "favorite": false
                        },
                        "quantity": 1
                    },
                },
                "stats":  {
                    "attributes": {
                        "past_seasons": [],
                        "season_match_boost": 0,
                        "loadouts": [
                            "CosmeticLocker:cosmeticlocker_athena1"
                        ],
                        "mfa_reward_claimed": true,
                        "rested_xp_overflow": 0,
                        "quest_manager": {
                            "dailyLoginInterval": new Date(),
                            "dailyQuestRerolls": 1
                        },
                        "book_level": 100,
                        "season_num": 13,
                        "season_update": 0,
                        "book_xp": 99999999,
                        "permissions": [],
                        "season": {
                            "numWins": 999,
                            "numHighBracket": 999,
                            "numLowBracket": 999
                        },
                        "vote_data": {},
                        "lifetime_wins": 0,
                        "book_purchased": true,
                        "purchased_battle_pass_tier_offers": {},
                        "rested_xp_exchange": 1.0,
                        "level": 69,
                        "book_level": athena.level,
                        "xp_overflow": 0,
                        "rested_xp": 0,
                        "rested_xp_mult": 1,
                        "accountLevel": 69420,
                        "competitive_identity": {},
                        "inventory_limit_bonus": 0,
                        "last_applied_loadout": "CosmeticLocker:cosmeticlocker_athena1",
                        "favorite_character": user.character,
                        "favorite_backpack": user.backpack,
                        "favorite_pickaxe": user.pickaxe,
                        "favorite_glider": user.gilder,
                        "favorite_skydivecontrail": user.skydivecontrail,
                        "favorite_loadingscreen": user.loadingscreen,
                        "favorite_dance": user.dance,
                        "favorite_musicpack": user.musicpack,
                        "favorite_itemwraps": user.itemwrap,
                        "daily_rewards": {},
                        "xp": 99999999,
                        "season_friend_match_boost": 0,
                        "active_loadout_index": 0
                    }
                },
            }
        }

        var cosmetics = caching.getCosmetics()
        cosmetics.forEach(cosmetic => {
            final.profile.items[`${cosmetic.backendType}:${cosmetic.id.toLowerCase()}`] = {
                "templateId": `${cosmetic.backendType}:${cosmetic.id.toLowerCase()}`,
                "attributes": {
                    "max_level_bonus": 0,
                    "level": 1,
                    "item_seen": 1,
                    "xp": 0,
                    "variants": [],
                    "favorite": false
                },
                "quantity": 1
            }
        })
        return final
    }
}