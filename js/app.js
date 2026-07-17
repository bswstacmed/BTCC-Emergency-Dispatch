// =====================================================
// Blue Tide Coastal Consulting Emergency Dispatch
// Version 2.0
// =====================================================

// -------------------------------
// Dispatcher PIN
// -------------------------------

const dispatcherPIN = "7278";

// =====================================================
// GOOGLE SHEETS API
// =====================================================

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxbEEGolycCzqclHQMJwbNVRFB3BSLSrIfLvfVFbM5zlDIfrgtnLbb6yVWtImdr2s8DEw/exec";

// -------------------------------
// Incident Number
// -------------------------------

let nextIncidentNumber = 260001;

// -------------------------------
// Active Incidents
// -------------------------------

const incidents = [];

const closedIncidents = [];
// -------------------------------
// Unit Database
// -------------------------------

const units = [

    // ALS

    {
        name: "Medic 1",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 2",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 3",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 4",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 5",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 6",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 7",
        type: "ALS",
        status: "Available",
        incident: null
    },

    {
        name: "Medic 8",
        type: "ALS",
        status: "Available",
        incident: null
    },

    // RESPONDERS

    {
        name: "Responder 1",
        type: "Responder",
        status: "Available",
        incident: null
    },

    {
        name: "Responder 2",
        type: "Responder",
        status: "Available",
        incident: null
    },

    {
        name: "Nurse 1",
        type: "Responder",
        status: "Available",
        incident: null
    },

    {
        name: "Nurse 2",
        type: "Responder",
        status: "Available",
        incident: null
    },

    // BLS

    {
        name: "Basic 1",
        type: "BLS",
        status: "Available",
        incident: null
    },

    {
        name: "Basic 2",
        type: "BLS",
        status: "Available",
        incident: null
    },

    {
        name: "Basic 6",
        type: "BLS",
        status: "Available",
        incident: null
    },

    {
        name: "Basic 7",
        type: "BLS",
        status: "Available",
        incident: null
    }

];

// =====================================================
// LOGIN
// =====================================================

document
    .getElementById("loginBtn")
    .addEventListener("click", login);

function login() {

    const pin =
        document.getElementById("pin").value;

    if (pin !== dispatcherPIN) {

        alert("Incorrect Dispatcher PIN");

        return;

    }

document.getElementById("loginScreen").style.display = "none";

document.getElementById("dashboard").style.display = "block";

// Load saved data
loadData();

startClock();

buildUnitBoard();

refreshIncidentList();

updateCounters();

addLog("Dispatcher logged in.");

}

// =====================================================
// DATE / TIME FORMAT
// =====================================================

function getDateTime() {

    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}

// =====================================================
// CLOCK
// =====================================================

function startClock() {

    updateClock();

    setInterval(updateClock, 1000);

}

function updateClock() {

    const now = new Date();

    const time =
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerHTML = time;

}

// =====================================================
// ACTIVITY LOG
// =====================================================

function addLog(message) {

    const now = getDateTime();

    const log = document.getElementById("activityLog");

    log.innerHTML =
        "<strong>" +
        now +
        "</strong> - " +
        message +
        "<br>" +
        log.innerHTML;

}

// =====================================================
// DASHBOARD COUNTERS
// =====================================================

function updateCounters() {

    let available = 0;
    let busy = 0;
    let oos = 0;

    units.forEach(unit => {

        if (unit.status === "Available") {

            available++;

        }

        else if (unit.status === "Out of Service") {

            oos++;

        }

        else {

            busy++;

        }

    });

    document.getElementById("availableUnits").innerHTML = available;
    document.getElementById("busyUnits").innerHTML = busy;
    document.getElementById("oosUnits").innerHTML = oos;
}

// =====================================================
// UNIT BOARD
// =====================================================

function buildUnitBoard() {

    const board = document.getElementById("unitBoard");

    board.innerHTML = "";

    createUnitSection("ALS");

    createUnitSection("Responder");

    createUnitSection("BLS");

}

function createUnitSection(type) {

    const board = document.getElementById("unitBoard");

    const heading = document.createElement("h5");

    heading.innerHTML =
        (type === "Responder") ? "RESPONDERS" : type;

    board.appendChild(heading);

    units
        .filter(unit => unit.type === type)
        .forEach(unit => {

            let cssClass = "available";
            let icon = "🟢";

            switch (unit.status) {

                case "Dispatched":
                    cssClass = "dispatched";
                    icon = "🔵";
                    break;

                case "Enroute":
                    cssClass = "enroute";
                    icon = "🟡";
                    break;

                case "On Scene":
                    cssClass = "onscene";
                    icon = "🟠";
                    break;

                case "Medical Bay":
                    cssClass = "medicalbay";
                    icon = "🩵";
                    break;

                case "Out of Service":
                    cssClass = "oos";
                    icon = "🔴";
                    break;

            }

            const div = document.createElement("div");

            div.className = "unit " + cssClass;

           let incidentText = "";

if (unit.incident !== null && unit.incident !== undefined) {

    incidentText =
        "<br><small><strong>Incident " +
        unit.incident +
        "</strong></small>";

}

div.innerHTML =
    icon +
    " <strong>" + unit.name.toUpperCase() + "</strong><br>"+
    "<small>" + unit.status + "</small>" +
    incidentText;

            div.onclick = function () {

                showUnit(unit);

            };

            board.appendChild(div);

        });

    board.appendChild(document.createElement("hr"));

}

// =====================================================
// UNIT DETAILS PANEL
// =====================================================

function showUnit(unit) {

    const incident = incidents.find(i => i.number == unit.incident);

    const incidentInfo = incident
        ? `
            <strong>Incident ${incident.number}</strong><br>
            ${incident.callType}<br>
            ${incident.location}<br>
            <small>${incident.emdCode}</small>
          `
        : "None";

    document.getElementById("detailsPanel").innerHTML = `

        <h3>${unit.name.toUpperCase()}</h3>

        <hr>

        <p><strong>Current Status</strong></p>

        <h4>${unit.status}</h4>

        <hr>

        <p><strong>Assigned Incident</strong></p>

        <p>${incidentInfo}</p>

        <hr>

        <button
            class="btn btn-primary w-100 mb-2"
            onclick="updateUnitStatus('${unit.name}','Dispatched')">

            Dispatch

        </button>

        <button
            class="btn btn-warning w-100 mb-2"
            onclick="updateUnitStatus('${unit.name}','Enroute')">

            Enroute

        </button>

        <button
            class="btn btn-success w-100 mb-2"
            onclick="updateUnitStatus('${unit.name}','On Scene')">

            On Scene

        </button>

        <button
            class="btn btn-info w-100 mb-2"
            onclick="updateUnitStatus('${unit.name}','Medical Bay')">

            Medical Bay

        </button>

        <button
            class="btn btn-secondary w-100 mb-2"
            onclick="updateUnitStatus('${unit.name}','Available')">

            Available

        </button>

        <button
            class="btn btn-danger w-100"
            onclick="updateUnitStatus('${unit.name}','Out of Service')">

            Out of Service

        </button>

    `;

}

// =====================================================
// UNIT STATUS UPDATES
// =====================================================

function updateUnitStatus(unitName, newStatus) {

    const unit = units.find(u => u.name === unitName);

    if (!unit) return;

    unit.status = newStatus;

    buildUnitBoard();

    showUnit(unit);

    updateCounters();

    addLog(unit.name + " → " + newStatus);

    // ==========================
    // ADD TO INCIDENT NOTES
    // ==========================

    if (unit.incident) {

        const incident = incidents.find(i => i.number == unit.incident);

        if (incident) {

            const now = new Date();

            const stamp =
                String(now.getHours()).padStart(2, "0") + ":" +
                String(now.getMinutes()).padStart(2, "0") + ":" +
                String(now.getSeconds()).padStart(2, "0");

            let message = "";

            switch(newStatus){

                case "Dispatched":
                    message = unit.name + " dispatched.";
                    break;

                case "Enroute":
                    message = unit.name + " responding.";
                    break;

                case "On Scene":
                    message = unit.name + " arrived on scene.";
                    break;

                case "Medical Bay":
                    message = unit.name + " transporting to Medical Bay.";
                    break;

                case "Available":
                    message = unit.name + " available.";
                    break;

                case "Out of Service":
                    message = unit.name + " placed Out of Service.";
                    break;

                default:
                    message = unit.name + " status changed to " + newStatus;

            }

            if (incident.notes.length > 0)
                incident.notes += "\n\n";

            incident.notes += "[" + stamp + "] " + message;

        }

    }

    saveData();

}

// =====================================================
// TOOLBAR BUTTONS
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("newIncidentBtn");

    if (btn) {

        btn.addEventListener("click", newIncident);

    }

});

// =====================================================
// NEW INCIDENT (Placeholder)
// =====================================================

function newIncident() {

    document.getElementById("detailsPanel").innerHTML = `

        <h3>Create New Incident</h3>

        <hr>

        <p><strong>Incident Number</strong></p>

        <h2>${nextIncidentNumber}</h2>

        <hr>

        <p>This screen will become the incident creation form.</p>

        <button
            class="btn btn-success w-100"
            onclick="confirmIncident()">

            Create Incident

        </button>

    `;

}

// =====================================================
// CREATE INCIDENT
// =====================================================

function confirmIncident() {

    const initialNote =
        document.getElementById("notes").value.trim();

    const now = new Date();

    const stamp =
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");

    const incident = {

        number: nextIncidentNumber,
        created: getDateTime(),
        callType: selectedCallType || "Unknown",
        emdCode: selectedEmdCode || "N/A",
        location:
            document.getElementById("location").value === "Custom Location..."
                ? (document.getElementById("customLocation").value.trim() || "Custom Location")
                : document.getElementById("location").value,
        status: "Active",
        assignedUnits: [],
        notes: initialNote ? "[" + stamp + "] " + initialNote : ""

    };

    incidents.push(incident);

    nextIncidentNumber++;

    refreshIncidentList();

    addLog("Incident " + incident.number + " created.");

    sendIncidentToGoogle(incident);

    newIncident();

    saveData();

}
// =====================================================
// INCIDENT LIST
// =====================================================

function refreshIncidentList() {

    const list = document.getElementById("incidentList");

    list.innerHTML = "";

    if (incidents.length === 0) {

        list.innerHTML = "No Active Incidents";

        document.getElementById("activeCalls").innerHTML = 0;

        return;

    }

    incidents.forEach(incident => {

        const card = document.createElement("div");

        card.className = "unit dispatched";

        card.style.marginBottom = "10px";

        card.innerHTML = `

            <strong>${incident.number}</strong><br>

            ${incident.callType.toUpperCase()}<br>

            <small>${incident.location}</small>

        `;

        card.onclick = function(){

            showIncident(incident);

        };

        list.appendChild(card);

    });

    document.getElementById("activeCalls").innerHTML =
        incidents.length;

}

// =====================================================
// INCIDENT DETAILS
// =====================================================

function showIncident(incident){

    document.getElementById("detailsPanel").innerHTML = `

        <h3>Incident ${incident.number}</h3>

        <hr>

        <strong>Call Type</strong><br>

        ${incident.callType.toUpperCase()}

        <hr>

        <strong>EMD Code</strong><br>

        ${incident.emdCode}

        <hr>

        <strong>Location</strong><br>

        ${incident.location}

        <hr>

        <strong>Time Created</strong><br>

        ${incident.created}

        <hr>

        <strong>Status</strong><br>

        ${incident.status}

        <hr>

        <strong>Assigned Units</strong>

        <br><br>

       ${
    incident.assignedUnits.length === 0
        ? "No Units Assigned"
        : incident.assignedUnits
            .map(unit => unit.toUpperCase())
            .join("<br>")
        }

        <hr>

        <strong>Incident Notes</strong>

<div
    style="
        min-height:140px;
        max-height:220px;
        overflow-y:auto;
        border:1px solid #555;
        padding:10px;
        margin-top:8px;
        border-radius:5px;
        white-space:pre-wrap;">

    ${incident.notes || "No notes entered."}

</div>

<br>

<textarea
    id="newIncidentNote"
    class="form-control mb-2"
    rows="3"
    placeholder="Add Incident Update..."></textarea>

<button
    class="btn btn-warning w-100 mb-3"
    onclick="addIncidentNote(${incident.number})">

    Add Note

</button>

        <button
    class="btn btn-primary w-100 mb-2"
    onclick="assignUnits(${incident.number})">

    Assign Units

</button>

<button
    class="btn btn-danger w-100"
    onclick="closeIncident(${incident.number})">

    Close Incident

</button>

    `;

}

// =====================================================
// INCIDENT CREATION FORM
// =====================================================

function newIncident() {

    document.getElementById("detailsPanel").innerHTML = `

        <h3>Create New Incident</h3>

        <hr>

        <label><strong>Incident Number</strong></label>

        <input
            id="incidentNumber"
            class="form-control mb-3"
            value="${nextIncidentNumber}"
            readonly>

        <label><strong>Call Type</strong></label>

        <select
            id="callType"
            class="form-select mb-3"
            onchange="updateEMDCodes()">

            <option value="">Select Call Type</option>
            <option>Abdominal Pain</option>
            <option>Allergic Reaction</option>
            <option>Animal Bites / Attacks</option>
            <option>Assault / Sexual Assault</option>
            <option>Back Pain</option>
            <option>Breathing Problems</option>
            <option>Burns / Explosion</option>
            <option>Carbon Monoxide / Inhalation / HazMat / CBRN</option>
            <option>Cardiac or Respiratory Arrest / Death</option>
            <option>Chest Pain</option>
            <option>Choking</option>
            <option>Convulsions / Seizures</option>
            <option>Diabetic Problems</option>
            <option>Drowning / Diving / SCUBA Accident</option>
            <option>Electrocution / Lightning</option>
            <option>Eye Problems / Injuries</option>
            <option>Falls</option>
            <option>Headache</option>
            <option>Heart Problems / A.I.C.D.</option>
            <option>Heat / Cold Exposure</option>
            <option>Hemorrhage / Lacerations</option>
            <option>Inaccessible Incident / Other Entrapments</option>
            <option>Overdose / Poisoning</option>
            <option>Pregnancy / Childbirth / Miscarriage</option>
            <option>Psychiatric / Abnormal Behavior / Suicide Attempt</option>
            <option>Sick Person</option>
            <option>Stab / Gunshot / Penetrating Trauma</option>
            <option>Stroke (CVA)</option>
            <option>Traffic / Transportation Incidents</option>
            <option>Traumatic Injuries (Specific)</option>
            <option>Unconscious / Fainting (Near)</option>
            <option>Unknown Problem (Man Down)</option>
            <option>Transfer / Interfacility / Palliative Care</option>
            <option>Automatic Crash Notification</option>
            <option>Health Care Professional Admission</option>
            <option>Pandemic Flu</option>
            <option>Special Assignments / EMS Standbys</option>

            
        </select>

        <label><strong>EMD Code</strong></label>

        <select
            id="emdCode"
            class="form-select mb-3">

            <option>Select Call Type First</option>

        </select>

        <label><strong>Location</strong></label>

        <select
    id="location"
    class="form-select mb-3"
    onchange="toggleCustomLocation()">
            

            <option>Bldg 298 Enc Command Center</option>

            <option>Barracks</option>

            <option>Auditorium</option>

            <option>Devil Dog Dare Field/Pavilion</option>

            <option>Lanham Park Football/Soccer Fields</option>

            <option>Parade Field</option>

            <option>Manside Pool</option>

            <option>Mess Hall</option>

            <option>Chapel</option>

            <option>Base Theatre</option>

            <option>Craven Hangar & Classrooms</option>

            <option>Medical Bay</option>

            <option>Custom Location...</option>

        </select>

        <input
    id="customLocation"
    class="form-control mb-3"
    type="text"
    placeholder="Enter Custom Location"
    style="display:none;">

        <label><strong>Notes</strong></label>

        <textarea
            id="notes"
            class="form-control mb-3"
            rows="4"></textarea>

        <button
            class="btn btn-success w-100"
            onclick="createIncident()">

            Create Incident

        </button>

    `;

}

// =====================================================
// EMD CODE DATABASE
// =====================================================


// =====================================================
// UPDATE EMD DROPDOWN
// =====================================================

function updateEMDCodes() {

    const callType = document.getElementById("callType").value;

    const emdSelect = document.getElementById("emdCode");

    emdSelect.innerHTML = "";

    if (!emdDatabase[callType]) {

        const option = document.createElement("option");

        option.text = "No EMD Codes Available";

        emdSelect.add(option);

        return;

    }

    emdDatabase[callType].forEach(code => {

        const option = document.createElement("option");

        option.text = code;

        option.value = code;

        emdSelect.add(option);

    });

}

// =====================================================
// CREATE INCIDENT
// =====================================================

function createIncident() {

    const callType = document.getElementById("callType").value;

    const emdCode = document.getElementById("emdCode").value;

    const location =
    document.getElementById("location").value === "Custom Location..."
        ? (document.getElementById("customLocation").value.trim() || "Custom Location")
        : document.getElementById("location").value;

    const notes = document.getElementById("notes").value;

    if (callType === "") {

        alert("Please select a Call Type.");

        return;

    }

    const incident = {

        number: nextIncidentNumber,

        callType: callType,

        emdCode: emdCode,

        location: location,

        notes: notes,

        status: "Active",

        assignedUnits: [],

        created: getDateTime()

    };

    incidents.push(incident);

    nextIncidentNumber++;

    refreshIncidentList();

    addLog(
        "Incident " +
        incident.number +
        " created (" +
        incident.callType +
        ")"
    );
// Play new incident tone
const tone = document.getElementById("newCallTone");

if (tone) {
    tone.currentTime = 0;
    tone.play().catch(err => console.log("Audio blocked:", err));
}

showIncident(incident);

}

// =====================================================
// ASSIGN UNITS
// =====================================================

function assignUnits(incidentNumber) {

    const incident = incidents.find(i => i.number === incidentNumber);

    if (!incident) return;

    let html = `

        <h3>Assign Units</h3>

        <hr>

        <strong>Incident ${incident.number}</strong>

        <hr>

    `;

    units.forEach(unit => {

        const checked = incident.assignedUnits.includes(unit.name)
            ? "checked"
            : "";

        html += `

            <label class="d-block mb-2">

                <input
                    type="checkbox"
                    class="assignUnit"
                    value="${unit.name}"
                    ${checked}>

                ${unit.name.toUpperCase()}

                <small>(${unit.status})</small>

            </label>

        `;

    });

    html += `

        <hr>

        <button
            class="btn btn-success w-100"
            onclick="completeAssignment(${incident.number})">

            Assign Selected Units

        </button>

    `;

    document.getElementById("detailsPanel").innerHTML = html;

}

// =====================================================
// COMPLETE UNIT ASSIGNMENT
// =====================================================

function completeAssignment(incidentNumber) {

    const incident = incidents.find(i => i.number === incidentNumber);

    if (!incident) return;

    const boxes = document.querySelectorAll(".assignUnit");

    // Store the previous assignments
    const previousAssignments = [...incident.assignedUnits];

    // Build the new assignment list
    const newAssignments = [];

    boxes.forEach(box => {

        if (box.checked) {
            newAssignments.push(box.value);
        }

    });

    // -------------------------------------------------
    // Release units removed from this incident
    // -------------------------------------------------

    previousAssignments.forEach(unitName => {

        if (!newAssignments.includes(unitName)) {

            const unit = units.find(u => u.name === unitName);

            if (unit) {

                unit.status = "Available";
                unit.incident = null;

                addLog(unit.name + " removed from Incident " + incident.number);

            }

        }

    });

    // -------------------------------------------------
    // Assign NEW units only
    // -------------------------------------------------

    newAssignments.forEach(unitName => {

        const unit = units.find(u => u.name === unitName);

        if (!unit) return;

        // Skip if already committed to another incident
        if (
            unit.incident &&
            unit.incident !== incident.number
        ) {
            return;
        }

        // Only change status if this is a NEW assignment
        if (unit.incident !== incident.number) {

            unit.status = "Dispatched";

            unit.incident = incident.number;

            addLog(unit.name + " assigned to Incident " + incident.number);

        }

    });

    // Save assignment list
    incident.assignedUnits = newAssignments;

    buildUnitBoard();

    refreshIncidentList();

    updateCounters();

    showIncident(incident);

    saveData();

}

// =====================================================
// CLOSE INCIDENT
// =====================================================

function closeIncident(incidentNumber) {

    const incident = incidents.find(i => i.number === incidentNumber);

    if (!incident) return;

    if (!confirm("Close Incident " + incident.number + "?")) {

        return;

    }

    // Release all assigned units
    units.forEach(unit => {

        if (unit.incident === incident.number) {

            unit.status = "Available";

            unit.incident = null;

        }

    });

    // Remove the incident from the active list
   const index = incidents.findIndex(i => i.number === incidentNumber);

if (index !== -1) {

    incident.status = "Closed";
    incident.closed = getDateTime();

    closedIncidents.push(incident);

    incidents.splice(index, 1);

}

    buildUnitBoard();

    updateCounters();

    refreshIncidentList();

    addLog("Incident " + incidentNumber + " closed.");

    document.getElementById("detailsPanel").innerHTML = `

        <h3>No Incident Selected</h3>

        <hr>

        <p>Select an incident or create a new one.</p>

    `;

    saveData();

}

// =====================================================
// SAVE / LOAD DATA
// =====================================================

function saveData() {

    localStorage.setItem("btcc_units", JSON.stringify(units));

    localStorage.setItem("btcc_incidents", JSON.stringify(incidents));

    localStorage.setItem(
    "btcc_closedIncidents",
    JSON.stringify(closedIncidents)
);

    localStorage.setItem("btcc_nextIncidentNumber", nextIncidentNumber);

}

function loadData() {

    const savedUnits =
        localStorage.getItem("btcc_units");

    const savedIncidents =
        localStorage.getItem("btcc_incidents");

        const savedClosed =
    localStorage.getItem("btcc_closedIncidents");

    const savedNumber =
        localStorage.getItem("btcc_nextIncidentNumber");

    if (savedUnits) {

    const loaded = JSON.parse(savedUnits);

    // Update existing units from saved data
    loaded.forEach(savedUnit => {

        const unit = units.find(u => u.name === savedUnit.name);

        if (unit) {

            unit.status = savedUnit.status;
            unit.incident = savedUnit.incident;

        }

    });

}

    if (savedIncidents) {

        const loaded = JSON.parse(savedIncidents);

        incidents.length = 0;

        loaded.forEach(i => incidents.push(i));

    }
    
    if (savedClosed) {

    const loaded = JSON.parse(savedClosed);

    closedIncidents.length = 0;

    loaded.forEach(i => closedIncidents.push(i));

    }
    
    if (savedNumber) {

        nextIncidentNumber = Number(savedNumber);

    }

}


// =====================================================
// EXPORT DISPATCH LOG (CSV)
// =====================================================

function exportDispatchLog() {

    let csv =
"Incident #,Created,Call Type,EMD Code,Location,Status,Assigned Units,Notes,Closed\n";

   const allIncidents = [
    ...incidents,
    ...closedIncidents
];

allIncidents.forEach(incident => {

    csv +=
        `"${incident.number}",` +
        `"${incident.created || ""}",` +
        `"${incident.callType || ""}",` +
        `"${incident.emdCode || ""}",` +
        `"${incident.location || ""}",` +
        `"${incident.status || ""}",` +
        `"${(incident.assignedUnits || []).join("; ")}",` +
        `"${(incident.notes || "").replace(/"/g,'""')}",` +
        `"${incident.closed || ""}"\n`;

});
    const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    const today = new Date();

    const fileName =
        "BTCC_Dispatch_Log_" +
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0") +
        ".csv";

    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    addLog("Dispatch log exported.");

}

function addIncidentNote(incidentNumber) {

    const incident = incidents.find(i => i.number === incidentNumber);

    if (!incident) return;

    const text = document.getElementById("newIncidentNote").value.trim();

    if (text === "") return;

    const now = new Date();

    const stamp =
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");

    if (incident.notes && incident.notes.length > 0) {

        incident.notes += "\n\n";

    }

    incident.notes += "[" + stamp + "] " + text;

    saveData();

    refreshIncidentList();

    showIncident(incident);

}

// =====================================================
// RESET EVENT
// =====================================================

function resetEvent() {

    const confirmReset = confirm(
        "WARNING!\n\n" +
        "This will completely reset the dispatch CAD.\n\n" +
        "This will erase:\n\n" +
        "• All Active Incidents\n" +
        "• All Closed Incidents\n" +
        "• All Unit Assignments\n" +
        "• Activity Log\n" +
        "• Saved Data\n\n" +
        "Continue?"
    );

    if (!confirmReset) return;

    // =====================================
    // CLEAR INCIDENTS
    // =====================================

    incidents.length = 0;

    if (typeof closedIncidents !== "undefined") {
        closedIncidents.length = 0;
    }

    // =====================================
    // RESET INCIDENT NUMBER
    // =====================================

    nextIncidentNumber = 260001;

    // =====================================
    // RESET ALL UNITS
    // =====================================

    units.forEach(unit => {

        unit.status = "Available";
        unit.incident = null;

    });

    // =====================================
    // CLEAR PANELS
    // =====================================

    document.getElementById("incidentList").innerHTML =
        "No Active Incidents";

    document.getElementById("detailsPanel").innerHTML =
        "Select a Unit or Incident";

    document.getElementById("activityLog").innerHTML =
        "Dispatch system started...";

    // =====================================
    // REFRESH DISPLAY
    // =====================================

    refreshIncidentList();
    buildUnitBoard();
    updateCounters();

    // =====================================
    // SAVE CLEAN DATABASE
    // =====================================

    saveData();

    alert("Dispatch CAD has been reset.");

}
// =====================================================
// CLOSED INCIDENTS WINDOW
// =====================================================

function showClosedIncidents() {

    let html = `
        <h3>Closed Incidents</h3>
        <hr>
    `;

    if (closedIncidents.length === 0) {

        html += "No Closed Incidents.";

    } else {

        closedIncidents
            .slice()
            .reverse()
            .forEach(incident => {

                html += `

                    <div class="card mb-2 p-2">

                        <strong>Incident ${incident.number}</strong><br>

                        ${incident.callType}<br>

                        ${incident.location}<br>

                        <small>
                        Opened: ${incident.created}<br>
                        Closed: ${incident.closed}
                        </small>
                        

                        <br><br>

                        <button
                            class="btn btn-primary btn-sm me-2"
                            onclick="viewClosedIncident(${incident.number})">

                            View

                        </button>

                        <button
                            class="btn btn-success btn-sm"
                            onclick="reopenIncident(${incident.number})">

                            Reopen

                        </button>

                    </div>

                `;

            });

    }

    document.getElementById("detailsPanel").innerHTML = html;

}
function viewClosedIncident(number){

    const incident =
        closedIncidents.find(i => i.number == number);

    if(!incident) return;

    showIncident(incident);

}
function reopenIncident(number){

    const index =
        closedIncidents.findIndex(i => i.number == number);

    if(index === -1) return;

    const incident = closedIncidents[index];

    incident.status = "Active";

    incidents.push(incident);

    closedIncidents.splice(index,1);

    refreshIncidentList();

    saveData();

    addLog(
        "Incident " +
        incident.number +
        " reopened."
    );

    showIncident(incident);

}

// =====================================================
// CLOSED INCIDENTS
// =====================================================

function showClosedIncidents() {

    let html = `
        <h3>Closed Incidents</h3>
        <hr>
    `;

    if (closedIncidents.length === 0) {

        html += "<p>No closed incidents.</p>";

    } else {

        closedIncidents
            .slice()
            .reverse()
            .forEach(incident => {

                html += `

                    <div class="unit available mb-2">

                        <strong>Incident ${incident.number}</strong><br>

                        ${incident.callType.toUpperCase()}<br>

                        <small>${incident.location}</small><br>

                        <small>Closed: ${incident.closed}</small>

                        <br><br>

                        <button
                            class="btn btn-primary btn-sm"
                            onclick="viewClosedIncident(${incident.number})">

                            View Report

                        </button>

                    </div>

                `;

            });

    }

    document.getElementById("detailsPanel").innerHTML = html;

}

function viewClosedIncident(number){

    const incident =
        closedIncidents.find(i => i.number == number);

    if(!incident) return;

    document.getElementById("detailsPanel").innerHTML = `

        <h3>Closed Incident ${incident.number}</h3>

        <hr>

        <strong>Call Type</strong><br>

        ${incident.callType.toUpperCase()}

        <hr>

        <strong>EMD Code</strong><br>

        ${incident.emdCode}

        <hr>

        <strong>Location</strong><br>

        ${incident.location}

        <hr>

        <strong>Created</strong><br>

        ${incident.created}

        <hr>

        <strong>Closed</strong><br>

        ${incident.closed}

        <hr>

        <strong>Assigned Units</strong><br>

        ${
            incident.assignedUnits.length
                ? incident.assignedUnits
                    .map(u=>u.toUpperCase())
                    .join("<br>")
                : "None"
        }

        <hr>

        <strong>Notes</strong>

        <div style="border:1px solid #555;padding:10px;border-radius:5px;min-height:80px;">

            ${incident.notes || "None"}

        </div>

        <br>

        <button
            class="btn btn-success w-100"
            onclick="printIncidentPDF(${incident.number})">

            Download PDF Report

        </button>

    `;

}

// =====================================================
// PRINT CLOSED INCIDENT PDF
// =====================================================

function printIncidentPDF(incidentNumber) {

    const incident = closedIncidents.find(i => i.number == incidentNumber);

    if (!incident) {
        alert("Incident not found.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 20;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("BTCC EMS INCIDENT REPORT", 105, y, { align: "center" });

    y += 12;

    doc.setLineWidth(0.5);
    doc.line(15, y, 195, y);

    y += 10;

    // Incident Information
    doc.setFontSize(14);
    doc.text("Incident Information", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    doc.text("Incident Number:", 15, y);
    doc.text(String(incident.number), 70, y);

    y += 7;

    doc.text("Status:", 15, y);
    doc.text("CLOSED", 70, y);

    y += 7;

    doc.text("Opened:", 15, y);
    doc.text(String(incident.created), 70, y);

    y += 7;

    doc.text("Closed:", 15, y);
    doc.text(String(incident.closed), 70, y);

    y += 12;

    // Incident Details
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Incident Details", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    doc.text("Call Type:", 15, y);
    doc.text(String(incident.callType).toUpperCase(), 70, y);

    y += 7;

    doc.text("EMD Code:", 15, y);
    doc.text(String(incident.emdCode), 70, y);

    y += 7;

    doc.text("Location:", 15, y);
    doc.text(String(incident.location), 70, y);

    y += 12;

    // Assigned Units
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Assigned Units", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    if (incident.assignedUnits.length === 0) {

        doc.text("None", 20, y);

        y += 7;

    } else {

        incident.assignedUnits.forEach(unit => {

            doc.text("• " + unit.toUpperCase(), 20, y);

            y += 7;

        });

    }

    y += 5;

    // Notes / Timeline
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Incident Notes / Timeline", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const notes = incident.notes
        ? doc.splitTextToSize(incident.notes, 170)
        : ["None"];

    doc.text(notes, 20, y);

    y += (notes.length * 6) + 10;

    // Dispatcher Summary
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Dispatcher Activity Summary", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    doc.text("Incident Created", 20, y);

    y += 6;

    doc.text("Units Assigned", 20, y);

    y += 6;

    doc.text("Incident Closed", 20, y);

    y += 12;

    doc.line(15, y, 195, y);

    y += 8;

    doc.setFont("helvetica", "italic");
    doc.text("END OF REPORT", 105, y, { align: "center" });

    doc.save("BTCC_Incident_" + incident.number + ".pdf");

}

// =====================================================
// MANUAL ALERT TONES
// =====================================================

function playRoutineTone() {

    const audio = document.getElementById("routineTone");

    audio.pause();
    audio.currentTime = 0;
    audio.play();

}

function playEmergencyTone() {

    const audio = document.getElementById("emergencyTone");

    audio.pause();
    audio.currentTime = 0;
    audio.play();

}
