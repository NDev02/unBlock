window.addEventListener("load", load);

async function load() {
    let req = await fetch("./blocks.json");
    let res = await req.json();

    for(let data of res) {
        createDocument(data);
    }
}

function createDocument(block) {
    let doc = document.createElement("div");
    doc.className = "doc";

    doc.innerHTML = `
    <div class="page" contenteditable>
        <div class="cb-detail">
            <h3>CUSTOM BLOCK</h3>
            <div>
                <h1 class="cb-number">${block["Custom Block"]}</h1>
                <h2 class="cb-name">${block["Name"]}</h2>
            </div>
        </div>
        <div class="ssz-detail">
            <h3>SSZ</h3>
            <h2 class="ssz">${block["SSZs"]}</h2>
        </div>
        <div class="tm">
            <h3>TM RESPONSIBLE FOR STOCKING</h3>
        </div>
        <div class="top-detail">
            <h3>TOP</h3>
            <h2 class="top">${block["Top"]}</h2>
        </div>
        <div class="middle-detail">
            <h3>MIDDLE</h3>
            <h2 class="middle">${block["Middle"]}</h2>
        </div>
        <div class="bottom-detail">
            <h3>BOTTOM</h3>
            <h2 class="bottom">${block["Bottom"]}</h2>
        </div>
        <div class="vehicle-detail">
            <h3>VEHICLE</h3>
            <h2>${block["Vehicle Type"]}</h2>
        </div>
    </div>`;

    document.body.appendChild(doc);
}