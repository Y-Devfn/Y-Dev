const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    Id: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    character: {
        type: String,
        default: ""
    },
    skydivecontrail: {
        type: String,
        default: ""
    },
    lockerName: {
        type: String,
        default: "Y-Dev is cool"
    },
    sac: {
        type: String,
        default: "Y-Dev"
    },
    backpack: {
        type: String,
        default: ""
    },
    bannercolor: {
        type: String,
        default: ""
    },
    banner: {
        type: String,
        default: ""
    },
    pickaxe: {
        type: String,
        default: ""
    },
    glider: {
        type: String,
        default: ""
    },
    dance: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    itemwrap: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    musicpack: {
        type: String,
        default: ""
    },
    loadingscreen: {
        type: String,
        default: ""
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User