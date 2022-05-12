const fs = require('fs')
fs.readFileSync('K:/SteamLibrary/steamapps/common/Left 4 Dead 2/left4dead2/addonlist.txt')
contents = fs.readFileSync('K:/SteamLibrary/steamapps/common/Left 4 Dead 2/left4dead2/addonlist.txt').toString()
wsagnostic = contents.match(/".*?"\s*"(0|1)"/g).map(line => line.replaceAll('"','').split(/\s+/))
addonEntries = wsagnostic.map(entry => ({path: entry[0], enabled: entry[1] === "1"}))

const exampleEntryLine = '\t"workshop\\00000000.vpk"\t\t"0"\n'