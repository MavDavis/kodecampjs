let members = document.getElementById("members");
let noun = ["David", "SimplSoul", "Cynthia", " Danny", "Dude"];
let adjective = ["big", "small", "yellow"];
let verb = ["coming", "coding", "writing"];
fetch("members.json")
    .then((res) => res.json())
    .then((data) => {
        passDataToDom(data.members);
        anArray(data.members);
        createObject(data.members);
    })
    .catch((err) => console.log(err));

function passDataToDom(data) {
    let users = "";
    data.forEach((mem) => {
        users += ` <div class="each-mem">
                                <div class="each-mem-name">
                                <p class="color">${mem.firstname} ${mem.lastname}</p>
                                </div>
                                
                            </div>`;
    });

    members.innerHTML = users;
}

function anArray(memname) {
    let shownames = document.getElementById("shownames");
    let shownamesdiv = document.getElementById("shownamesdiv");
    shownames.addEventListener("click", () => {
        let username = "";
        memname.forEach((names) => {
            console.log(names.firstname, names.lastname);
            username += `<p class ="names>${names.firstname} ${names.lastname}</p>`;
        });
        shownamesdiv.innerHTML = username;
    });
}

function createObject(data) {
    let num3 = document.getElementById("num3");
    let users = "";
    data.forEach((mem) => {
        //     users += `
        //      <div class="each-mem">
        //                 <div class="each-mem-name"></div>

        //                 <p>${mem.birthmonth}</p>
        //                 <p>${mem.bestmovie}</p>
        //             </div>
        // `;
        console.log(mem.bestmovie);
    });

    num3.innerHTML = users;
}

function numFour() {
    let num1 = `${noun[0]} is ${verb[1]} and ${verb[2]} at a time`;
    let num2 = `${noun[1]} is ${verb[0]} and ${verb[1]} at a time`;
    let num3 = `${noun[2]} is ${verb[1]} and ${verb[2]} at a time`;
    let num = `${noun[3]} is ${verb[1]} and ${verb[2]} at a time`;
    let num5 = `${noun[4]} is ${verb[1]} and ${verb[2]} at a time`;

    let num4 = document.getElementById("num4");
    let div = "";
    div += `
        <p>${num1}</p>
         <p>${num2}</p>
          <p>${num3}</p>
           <p>${num}</p>
            <p>${num5}</p>
        `;
    // num4.innerHTML = div;
    console.log(num1, num2, num3, num, num5);
    return num1, num2, num3, num, num5;
}
numFour();

function numFive(a, b) {
    return a % b;
}
console.log(numFive(2, 5));

function numSix(a, b, c) {
    let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2)) - 4 * a * c) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2)) - 4 * a * c) / (2 * a);
    return {
        x1,
        x2,
    };
}
console.log(numSix(1, 5, -1));

function numSeven() {
    const myNoun = "dog";
    const myAdjective = "big";
    const myVerb = "ran";
    const myAdverb = " quickly";
    const wordBanks = `my ${myAdjective} ${myNoun} ${myVerb} too ${myAdverb}`;
    console.log(wordBanks);
}
numSeven();

function numEight(r) {
    const Pi = 3.142;
    return Pi * r * (Pi * r);
}
console.log(numEight(3).toFixed(2) + "r^2");

function numNine(principal, time, rate) {
    let simpleInterest = (principal * time * rate) / 100;
    let amount = principal * Math.pow(1 + rate / 100, time);
    let compoundinterest = amount - principal;
    return simpleInterest;
}
console.log("$" + numNine(8200, 2.5, 17.5).toFixed(2));
console.log(10 % 4);

function numEleven(mass, height) {
    let bmiCalc = mass / (height * height);
    return bmiCalc;
}

let meritBmi1 = Math.floor(numEleven(78, 1.69));
let nutjobBmi1 = Math.floor(numEleven(92, 1.95));

let meritBmi2 = Math.floor(numEleven(78, 1.69));
let nutjobBmi2 = Math.floor(numEleven(92, 1.95));
console.log(meritBmi1, nutjobBmi1);
let MeritHigherBMi = "Merit has a higher BMI mass";
let NutjobHigherBMi = "Nutjob has a higher BMI mass";
if (meritBmi1 > nutjobBmi1) {
    console.log(MeritHigherBMi);
} else {
    console.log(NutjobHigherBMi);
}
if (meritBmi2 > nutjobBmi2) {
    console.log(MeritHigherBMi);
} else {
    console.log(NutjobHigherBMi);
}