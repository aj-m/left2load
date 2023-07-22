class AddonList {
    /**
     *
     * @param {string} serialized
     */
    constructor(data) {
        const inputType = typeof data;
        this.addons = undefined;
        switch(inputType) {
            case 'string':
                this.addons = AddonList.deserialize(data);
                break;
            case 'object':
                if(data instanceof AddonList) {
                    // copy!
                    this.addons = data.addons.slice();
                } else if(Array.isArray(data)) {
                    if(data.some(element => !element.path || typeof element.enabled !== 'boolean')) {
                        throw 'invalid addon list array';
                    } else {
                        this.addons = data.map((addon, ndx) => ({
                            ...addon,
                            position: ndx
                        }))
                    }
                }
                break;
            case 'undefined':
                this.addons = [];
                break;
            default:
                throw `unexpected data type ${inputType} in AddonList constructor`
        }
        //this.addons = AddonList.deserialize(data);
    }
    static deserialize(data) {
        if(data.slice(1,10) !== "AddonList") {
            throw "invalid input file";
        }
        const infoLines = data.match(/".*?"\s*"(0|1)"/g).map(line => line.replaceAll('"','').split(/\s+/));
        const addonEntries = infoLines.map((entry, ndx) => ({
            path: entry[0],
            enabled: entry[1] === "1",
            position: ndx
        }))
        return addonEntries;
    }
    static serialize(data) {
        return new AddonList(data).toString();
    }
    toArray() {
        return this.addons;
    }
    toString(crlf=false) {
        const endl = crlf ? "\r\n" : "\n"
        const serializeLine = ({path, enabled}) => `\t"${path}"\t\t"${enabled ? 1 : 0}"${endl}`
        const serialized = this.addons.map(serializeLine).join('');
        return `"AddonList"${endl}{${endl}${serialized}}${endl}`
    }
    static getTestArray() {
        return [
            { path: "workshop\\foo.vpk", enabled: true, position: 0 },
            { path: "workshop\\bar.vpk", enabled: false, position: 1 },
            { path: "workshop\\qux.vpk", enabled: true, position: 2 },
        ]
    }
}

//module.exports = AddonList;