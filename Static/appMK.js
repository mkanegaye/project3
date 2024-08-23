// log data too console
let url = '../Data/2021_Crimes_SummarizedByWard.csv'
d3.csv(url).then(function(data){
    console.log(data);
});

// Arrays to hold data by ward
arson_wards = [];
arson_count = [];
assault_wards = [];
assault_count = [];
burglary_wards = [];
burglary_count = [];
homicide_wards = [];
homicide_count = [];
motortheft_wards = [];
motortheft_count = [];
robbery_wards = [];
robbery_count = [];
sex_wards = [];
sex_count = [];
theftAuto_wards = [];
theftAuto_count = [];
theft_wards = [];
theft_count = [];




// Grab counts of crime reports by offense type
d3.csv(url).then(function(data) {
    let crimes = data;
    console.log(data)

    // loop through crimes
    for (let i = 0; i<data.length; i++) {
        let crime = data[i]

        // Conditional statements to determine array assignment
        if (crime.OFFENSE == "ARSON") {
            arson_wards.push(crime.WARD);
            arson_count.push(crime.Count);
        } else if (crime.OFFENSE == "ASSAULT W/DANGEROUS WEAPON") {
            assault_wards.push(crime.WARD);
            assault_count.push(crime.Count);
        } else if (crime.OFFENSE == "BURGLARY") {
            burglary_wards.push(crime.WARD);
            burglary_count.push(crime.Count);
        } else if (crime.OFFENSE == "HOMICIDE") {
            homicide_wards.push(crime.WARD);
            homicide_count.push(crime.Count);
        } else if (crime.OFFENSE == "MOTOR VEHICLE THEFT") {
            motortheft_wards.push(crime.WARD);
            motortheft_count.push(crime.Count);
        } else if (crime.OFFENSE == "SEX ABUSE") {
            sex_wards.push(crime.WARD);
            sex_count.push(crime.Count);
        } else if (crime.OFFENSE == "ROBBERY") {
            robbery_wards.push(crime.WARD);
            robbery_count.push(crime.Count);
        } else if (crime.OFFENSE == "THEFT F/AUTO") {
            theftAuto_wards.push(crime.WARD);
            theftAuto_count.push(crime.Count);
        } else if (crime.OFFENSE == "THEFT/OTHER") {
            theft_wards.push(crime.WARD);
            theft_count.push(crime.Count);
        }
    };
    console.log(arson_count);

// Creating stacked bar chart to show total crimes/ward/types
// Eliminating excess points in array not assigned to a ward
let assaultSlice = assault_count.slice(0,8);
let burglarySlice = burglary_count.slice(0,8);
let homicideSlice = homicide_count.slice(0,8);
let motorSlice = motortheft_count.slice(0,8);
let sexSlice = sex_count.slice(0,8);
let robberySlice = robbery_count.slice(0,8)
let theftAutoSlice = theftAuto_count.slice(0,8);
let theftSlice = theft_count.slice(0,8);

// creating traces for crime types
let wards = [1,2,3,4,5,6,7,8]
let trace1 = {
    x: wards,
    y: [0,1,1,0,0,0,1,1],
    name: 'Arson',
    type: 'bar',
};

let trace2 = {
    x: wards,
    y: assaultSlice,
    name: 'Assault w/ Deadly Weapon',
    type: 'bar',
};
let trace3 = {
    x: wards,
    y: burglarySlice,
    name: 'Burglary',
    type: 'bar',
};
let trace4 = {
    x: wards,
    y: homicideSlice,
    name: 'Homicide',
    type: 'bar',
};
let trace5 = {
    x: wards,
    y: motorSlice,
    name: 'Motor Vehicle Theft',
    type: 'bar',
};
let trace6 = {
    x: wards,
    y: sexSlice,
    name: 'Sex Abuse',
    type: 'bar',
};
let trace7 = {
    x: wards,
    y: robberySlice,
    name: 'Robbery',
    type: 'bar',
};
let trace8 = {
    x: wards,
    y: theftAutoSlice,
    name: 'Theft f/Auto',
    type: 'bar',
};
let trace9 = {
    x: wards,
    y: theftSlice,
    name: 'Theft/Other',
    type: 'bar',
};

let stacked_data = [trace2, trace1, trace3,trace4,trace5,trace6,trace7,trace8,trace9];

let layout_stacked = {
    title: "Total Crimes per Ward",
    barmode: "stack",
    showlegend: true, 
};

Plotly.newPlot("bar-stacked", stacked_data, layout_stacked);
    
});

// Create basic default graph
var data = [{
    x: [1,2,3,4,5,6,7,8,9],
    y: [0,0,0,0,0,0,0,0],
    type: "bar"
}];
let layout = {
    title:"Crime Type by Ward",
    xaxis: {title:"Ward", range: [.5, 8.5]},
    yaxis: {title: "Number of Reports", autotick: true},
    automargin: true,
}
Plotly.newPlot("bar", data, layout);

// Dropdown to update graph
d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
    let x = [];
    let y = [];

    if (dataset === 'dataset1') {
        x = arson_wards;
        y = arson_count;
    }

    else if (dataset ==='dataset2') {
        x = assault_wards;
        y = assault_count;
    }

    else if (dataset ==="dataset3") {
        x = burglary_wards;
        y = burglary_count;
    }
    else if (dataset ==="dataset4") {
        x = homicide_wards;
        y = homicide_count;
    }
    else if (dataset ==="dataset5") {
        x = motortheft_wards;
        y = motortheft_count;
    }
    else if (dataset ==="dataset6") {
        x = sex_wards;
        y = sex_count;
    }
    else if (dataset ==="dataset7") {
        x = robbery_wards;
        y = robbery_count;
    }
    else if (dataset ==="dataset8") {
        x = theftAuto_wards;
        y = theftAuto_count;
    }
    else if (dataset ==="dataset9") {
        x = theft_wards;
        y = theftAuto_count;
    }

    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);
};


// // Stacked bar chart
// d3.csv(url).then(function(data) {
//     d3.csv(url).then((data) => {
//     let crimes = data;
//     console.log(data)

//     // loop through crimes
//     for (let i = 0; i<data.length; i++) {
//         let crime = data[i]

//         // Conditional statements to determine array assignment
//         if (crime.OFFENSE == "ARSON") {
//             arson_wards.push(crime.WARD);
//             arson_count.push(crime.Count);
//         } else if (crime.OFFENSE == "ASSAULT W/DANGEROUS WEAPON") {
//             assault_wards.push(crime.WARD);
//             assault_count.push(crime.Count);
//         } else if (crime.OFFENSE == "BURGLARY") {
//             burglary_wards.push(crime.WARD);
//             burglary_count.push(crime.Count);
//         } else if (crime.OFFENSE == "HOMICIDE") {
//             homicide_wards.push(crime.WARD);
//             homicide_count.push(crime.Count);
//         } else if (crime.OFFENSE == "MOTOR VEHICLE THEFT") {
//             motortheft_wards.push(crime.WARD);
//             motortheft_count.push(crime.Count);
//         } else if (crime.OFFENSE == "SEX ABUSE") {
//             sex_wards.push(crime.WARD);
//             sex_count.push(crime.Count);
//         } else if (crime.OFFENSE == "ROBBERY") {
//             robbery_wards.push(crime.WARD);
//             robbery_count.push(crime.Count);
//         } else if (crime.OFFENSE == "THEFT F/AUTO") {
//             theftAuto_wards.push(crime.WARD);
//             theftAuto_count.push(crime.Count);
//         } else if (crime.OFFENSE == "THEFT/OTHER") {
//             theft_wards.push(crime.WARD);
//             theft_count.push(crime.Count);
//         }
//     }});
console.log(assault_count);
console.log(assault_wards);

// let wards = [1,2,3,4,5,6,7,8];
// let trace1 = {
//     x: wards,
//     y: [0,1,1,0,0,0,1,1],
//     name: 'Arson',
//     type: 'bar',
//     orientation: "h"
// };

// let trace2 = {
//     x: wards,
//     y: assaultSlice,
//     name: 'Assault w/ Deadly Weapon',
//     type: 'bar',
//     orientation:"h"
// };
// let trace3 = {
//     x: wards,
//     y: burglarySlice,
//     name: 'Burglary',
//     type: 'bar',
//     orientation:"h"
// };
// let trace4 = {
//     x: wards,
//     y: homicideSlice,
//     name: 'Homicide',
//     type: 'bar',
//     orientation:"h"
// };
// let trace5 = {
//     x: wards,
//     y: motorSlice,
//     name: 'Motor Vehicle Theft',
//     type: 'bar',
//     orientation:"h"
// };
// let trace6 = {
//     x: wards,
//     y: sexSlice,
//     name: 'Sex Abuse',
//     type: 'bar',
//     orientation:"h"
// };
// let trace7 = {
//     x: wards,
//     y: robberySlice,
//     name: 'Robbery',
//     type: 'bar',
//     orientation:"h"
// };
// let trace8 = {
//     x: wards,
//     y: theftAutoSlice,
//     name: 'Theft f/Auto',
//     type: 'bar',
//     orientation:"h"
// };
// let trace9 = {
//     x: wards,
//     y: theftSlice,
//     name: 'Theft/Other',
//     type: 'bar',
//     orientation:"h"
// };

// let stacked_data = [trace2, trace1, trace3,trace4,trace5,trace6,trace7,trace8,trace9];

// let layout_stacked = {
//     title: "Total Crimes per Ward",
//     barmode: "stack",
//     showlegend: true, 
// };

// Plotly.newPlot("bar-stacked", stacked_data, layout_stacked);
