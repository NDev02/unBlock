const pickerOpts = {
    types: [
        {
            description: "Images",
            accept: {
                "text/csv": [".csv"],
            },
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
};

const customBlockSSZ = {
    "24 - ENTERTAINMENT": {
      "SSZ": 9,
      "SSZ CONTENTS": "Electronics | Books | Music | Movies"
    },
    "25 - ELECTRONIC": {
      "SSZ": 9,
      "SSZ CONTENTS": "Electronics | Books | Music | Movies"
    },
    "26 - C28-C33": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "27 - C34-C38": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "28 - PAPER": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "29 - PAPER 1": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "30 - BACKWALL TOYS": {
      "SSZ": "8,11",
      "SSZ CONTENTS": ""
    },
    "31 - TOYS": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "32 - TOYS 1": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "33 - TOYS 2": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "34 -  TOYS 3": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "35 - TOYS 4": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "36 -  TOYS 5": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "37 - TOYS 6": {
      "SSZ": 11,
      "SSZ CONTENTS": "TOYS"
    },
    "38 - TOYS 7": {
      "SSZ": "8,11",
      "SSZ CONTENTS": ""
    },
    "39 - AMP. GIFT.": {
      "SSZ": "2,11",
      "SSZ CONTENTS": ""
    },
    "40 - REAR SEASONAL": {
      "SSZ": 17,
      "SSZ CONTENTS": "Seasonal | Holiday Candy | Lawn & Garden"
    },
    "41 - REAR 1": {
      "SSZ": 17,
      "SSZ CONTENTS": "Seasonal | Holiday Candy | Lawn & Garden"
    },
    "42 - MINI": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "43 - MINI 1": {
      "SSZ": "4,7,11",
      "SSZ CONTENTS": ""
    },
    "47 - OTC": {
      "SSZ": "5,21",
      "SSZ CONTENTS": ""
    },
    "48 - OTC 1": {
      "SSZ": "5,21",
      "SSZ CONTENTS": ""
    },
    "49 - HAIRCARE": {
      "SSZ": 12,
      "SSZ CONTENTS": "Haircare | Hair Accessories | Cotton | Lotion | Sun Care"
    },
    "50 - ONE SPOT / CL": {
      "SSZ": 18,
      "SSZ CONTENTS": "Bullseye"
    },
    "51 - G6-G19": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "52 - G20-G21": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "53 - G22-G23": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "54 - G24-G25": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "55 - G26-G27": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "56 - G28-G31": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "57 - G32-G33": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "58 - G34-G35": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "59 - G36-G37": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "60 - G40": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "61 - BABY": {
      "SSZ": 10,
      "SSZ CONTENTS": "Baby Hardlines"
    },
    "62 - DIAPERS": {
      "SSZ": 10,
      "SSZ CONTENTS": "Baby Hardlines"
    },
    "63 - BABY ESSENTIALS": {
      "SSZ": 10,
      "SSZ CONTENTS": "Baby Hardlines"
    },
    "64 - PETS": {
      "SSZ": 4,
      "SSZ CONTENTS": ""
    },
    "65 - PETS 1": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "66 - CHEM": {
      "SSZ": "4,21",
      "SSZ CONTENTS": ""
    },
    "67 - CHEM 1": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "68 - CHEM 2": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "69 - CHEM 3": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "70 - CHEM 4": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "71 - CHEM 5": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "72 - SPORT": {
      "SSZ": 8,
      "SSZ CONTENTS": "Sporting Goods | Hardware | Automotive"
    },
    "73 - SPORT": {
      "SSZ": 8,
      "SSZ CONTENTS": "Sporting Goods | Hardware | Automotive"
    },
    "74 - HBA": {
      "SSZ": 22,
      "SSZ CONTENTS": "Shave | Deodorant | Soap"
    },
    "75 - HBA1": {
      "SSZ": "21,22",
      "SSZ CONTENTS": ""
    },
    "76 - BEAUTY": {
      "SSZ": "1,2,5",
      "SSZ CONTENTS": ""
    },
    "86 - STATIONERY": {
      "SSZ": 6,
      "SSZ CONTENTS": "Cards | Party | Stationary | School Supplies"
    },
    "88 - KITCHEN": {
      "SSZ": 7,
      "SSZ CONTENTS": "Food"
    },
    "90 - KITCHEN 2": {
      "SSZ": 4,
      "SSZ CONTENTS": "Housewares | Kitchen | Pets | Chemicals"
    },
    "91 - HOME DECOR": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "92 - FURNITURE": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "93 - DOMESTICS": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "94 - HIPA": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "95 - DONESTICS 1": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "96 - BATH": {
      "SSZ": 3,
      "SSZ CONTENTS": "Domestics | Bed | Bath | Furniture | Floor Care"
    },
    "98 - BABY FURNITURE": {
      "SSZ": 10,
      "SSZ CONTENTS": "Baby Hardlines"
    }
  }

async function pickFile() {
    [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    let objects = [];
    let f = await fileHandle.getFile();
    let t = await f.text();
    let entries = t.split(/\n/g);
    let keys = entries[0].split(',');
    for(let entry of entries) {
        if(entry == keys) {
            continue;
        } else {
            let vals = entry.split(/,|".*"/);
            if(vals.length != keys.length) {
                continue;
            } else {
                let o = {};
                for(let i = 0; i < keys.length; i++) {
                    o[keys[i]] = vals[i];
                }
                objects.push(o);
            }
        }
    }
    objects.forEach(elm => createDocument(elm));
    document.querySelector(".input").remove();
    window.print();
}

function createDocument(object) {
    let container = document.body;
    let elm = document.createElement("div");
    elm.className = "output container";
    let hrs = Math.floor(object["STOCKING TIME (HRS)"]) + "hrs";
    let mins = ((object["STOCKING TIME (HRS)"] * 60) % 60) + "mins";
    elm.innerHTML = `
        <div class="custom-block">
            <h2>CUSTOM BLOCK</h2>
            <h1 id="custom-block">${object["CUSTOM BLOCK"]}</h1>
        </div>
        <div class="top">
            <h2>TOP</h2>
            <p id="top"></p>
        </div>
        <div class="middle">
            <h2>MIDDLE</h2>
            <p id="middle"></p>
        </div>
        <div class="bottom">
            <h2>BOTTOM</h2>
            <p id="bottom"></p>
        </div>
        <div class="store-stock-zone">
            <h3>STORE STOCK ZONE</h3>
            <p id="store-stock-zone">${customBlockSSZ[object["CUSTOM BLOCK"]]?.SSZ || ""}</p>
        </div>
        <div class="assigned-to">
            <h3>TM RESPONSIBLE FOR STOCKING</h3>
            <p id="assigned-to"></p>
        </div>
        <div class="vehicle">
            <h4>CIRCLE<br/>VEHICLE</h4>
            <p>pallet</p>
            <p>flat</p>
            <p>no-shelf uboat</p>
            <p>mid-shelf uboat</p>
            <p>two-shelf uboat</p>
            <p>top-shelf uboat</p>
        </div>
        <div class="detail">
            <h2>Inbound Detail</h2>
            <p>${object["FULL CASE CARTONS"]} casepacks, ${object["REPACK CARTONS"]} repacks. Time: ${hrs} ${mins}.</p>
        </div>
    `;
    container.appendChild(elm);
}