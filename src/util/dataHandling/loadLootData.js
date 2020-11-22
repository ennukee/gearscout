const fs = require('fs')
// This file must be run via node to function

const init = async () => {
    fs.readFile('./sl_loot_data.txt', 'utf8', (error, data) => {
        if (error) {
            console.error(error)
            return;
        }
        main(data)
    })
}

const main = (data) => {
    const processedData = data
        .replace(/\r/g,'') // dead space after each line
        .split('\n') // split into each row
        .slice(1,) // ignore header row
        .map(line => line.split('\t')) // split up row into an array of values
        .filter(line => 
            !line.includes('Potency') &&
            !line.includes('Endurance') &&
            !line.includes('Finesse') &&
            !line.includes('Trinket') &&
            !line.includes('Castle Nathria')
        )
    /*
        0   Dungeon*
        1   Boss*                
        2   Type*
        3   Slot*
        4   BaseIlvl
        5   Name*
        6   Main Stat*
        7   Secondary 1*
        8   ^ Value*
        9   Secondary 2*
        10  ^ Value*
        11  Active/Passive (trinkets)
        12  Source (dungeon / raid)
        13  Role
    */
    const processedDataRemapped = processedData.map(line => ({
        id: `${line[0]}${Math.floor(Math.random() * 1000000000)}`, // because lazy
        dungeon: line[0],
        boss: line[1].replace(/'/g, ''),
        armorType: line[2],
        armorSlot: line[3],
        itemName: line[5],
        primaryStat: line[6].split('/'),
        secondaryOne: line[7],
        secondaryOneValue: line[8],
        secondaryTwo: line[9],
        secondaryTwoValue: line[10],
        // secondaryStats: {
        //     higher: {
        //         stat: line[7],
        //         amount: line[8]
        //     },
        //     lower: {
        //         stat: line[9],
        //         amount: line[10],
        //     }
        // }
    }))
    fs.writeFile('./sl_loot_data_object.txt', JSON.stringify(processedDataRemapped), error => {
        if (error) {
            console.error(error)
            return
        }
    })
}

init()