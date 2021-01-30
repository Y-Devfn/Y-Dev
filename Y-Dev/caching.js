const fs = require("fs");
const https = require("https")

module.exports = {
    getCosmetics() {
        return JSON.parse(fs.readFileSync(`${__dirname}/cosmectics/cosmetics.json`));
    },

    getBanners() {
        return JSON.parse(fs.readFileSync(`${__dirname}/cosmectics/banners.json`));
    },

    getBannerColors() {
        return JSON.parse(fs.readFileSync(`${__dirname}/cosmectics/colors.json`));
    },

    DownloadCosmetics() {
        https.get("https://fortnite-api.com/v2/cosmetics/br", (r) => {
            let cosmetics = []
            let str = ""
    
            r.on("data", d => str += d.toString())
    
            r.on("end", () => {
                str = JSON.parse(str)
                str = str.data
    
                str.forEach(c => {
                    cosmetics.push({
                        name: c.name || "",
                        id: c.id,
                        backendType: c.type.backendValue
                    })
                })
                fs.writeFileSync("./cosmectics/cosmetics.json", JSON.stringify(cosmetics, null, 4))
            })
        })
        https.get("https://fortnite-api.com/v1/banners", (r) => {
            let file = ""
            let banners = []
    
            let str = ""
    
            r.on("data", d => str += d.toString())
        
            file += "["
        
            r.on("end", () => {
                str = JSON.parse(str)
    
                str.data.forEach(c => {
                    banners.push('\n    "' + c.id + '"')
                })
                file += banners + "\n]"
    
                fs.writeFileSync("./cosmectics/banners.json", file)
            })
        })
    
        https.get("https://fortnite-api.com/v1/banners/colors", (r) => {
            let file = ""
            let colors = []
    
            let str = ""
    
            r.on("data", d => str += d.toString())
        
            file += "["
        
            r.on("end", () => {
                str = JSON.parse(str)
    
                str.data.forEach(c => {
                    colors.push('\n    "' + c.id + '"')
                })
                file += colors + "\n]"
    
                fs.writeFileSync("./cosmectics/colors.json", file)
            })
        })
    }
}