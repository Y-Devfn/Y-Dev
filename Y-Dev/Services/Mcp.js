const express = require("express")
const app = express()
const User = require("../model/User")
const profile = require("../profile")

function createResponse(changes, id, rvn) {
    return {
        profileRevision: rvn ? (rvn - 0) + (1 - 0) : 1,
        profileId: id,
        profileChangesBaseRevision: Number(rvn) || 1,
        profileChanges: changes,
        profileCommandRevision: rvn ? (rvn - 0) + (1 - 0) : 1,
        serverTime: new Date(),
        responseVersion: 1
    }
}

app.post("/fortnite/api/game/v2/profile/:accountId/client/:command", async (req, res) => {
    var profileId = req.query.profileId
    var rvn = req.query.rvn
    var accountId = req.params.accountId
    var command = req.params.command

    var user = await User.findOne({Id: accountId}).lean() // trys to read the user id

    if (user) { // if the user is made
        switch (command) {
            case "QueryProfile":
                switch (profileId) {
                    case "athena":
                        var profileAthena = profile.athena(accountId)
                        res.json(createResponse([profileAthena], "athena"))
                        break
                    case "common_core":
                        var profileCommonCore = profile.commoncore(accountId)
                        res.json(createResponse([profileCommonCore], "common_core"))
                        break
                    case "common_public":
                        res.json(createResponse([], "common_public"))
                        break
                    case "collections":
                        res.json(createResponse([], "collections"))
                        break
                    case "creative":
                        res.json(createResponse([], "creative"))
                        break
                    default:
                        res.json(createResponse([], profileId))
                    break
                }
                break
            case "ClientQuestLogin":
                switch (profileId) {
                    case "athena":
                        var profileAthena = profile.athena(accountId)
                        res.json(createResponse([profileAthena], "athena"))
                        break
                    case "common_core":
                        var profileCommonCore = profile.commoncore(accountId)
                        res.json(createResponse([profileCommonCore], "common_core"))
                        break
                    case "common_public":
                        res.json(createResponse([], "common_public"))
                        break
                    case "collections":
                        res.json(createResponse([], "collections"))
                        break
                    case "creative":
                        res.json(createResponse([], "creative"))
                        break
                    default:
                        res.json(createResponse([], profileId))
                    break
                } 
                break
            default:
                res.json(createResponse([], profileId))
            break
        }
    } else {
        var userrr = new User({
            Id: accountId
        })
        userrr.save() // saves the account
        .then((result) => {
            console.log("User Created And Logged In!") // logs the account in the console

            switch (command) {
                case "QueryProfile":
                    switch (profileId) {
                        case "athena":
                            var profileAthena = profile.athena(accountId)
                            res.json(createResponse([profileAthena], "athena"))
                            break
                        case "common_core":
                            var profileCommonCore = profile.commoncore(accountId)
                            res.json(createResponse([profileCommonCore], "common_core"))
                            break
                        case "common_public":
                            res.json(createResponse([], "common_public"))
                            break
                        case "collections":
                            res.json(createResponse([], "collections"))
                            break
                        case "creative":
                            res.json(createResponse([], "creative"))
                            break
                        default:
                            res.json(createResponse([], profileId))
                        break
                    }
                    break
                case "ClientQuestLogin":
                    switch (profileId) {
                        case "athena":
                            var profileAthena = profile.athena(accountId)
                            res.json(createResponse([profileAthena], "athena"))
                            break
                        case "common_core":
                            var profileCommonCore = profile.commoncore(accountId)
                            res.json(createResponse([profileCommonCore], "common_core"))
                            break
                        case "common_public":
                            res.json(createResponse([], "common_public"))
                            break
                        case "collections":
                            res.json(createResponse([], "collections"))
                            break
                        case "creative":
                            res.json(createResponse([], "creative"))
                            break
                        default:
                            res.json(createResponse([], profileId))
                        break
                    } 
                    break
                default:
                    res.json(createResponse([], profileId))
                break
            }
        })
        .catch((err) => {
            console.log(err) // logs the error in the console if there is one 
        })
    }
})

module.exports = app