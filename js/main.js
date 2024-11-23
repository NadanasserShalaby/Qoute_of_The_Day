var Qoute = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        auther: "― Oscar Wilde"
    },
    {
        qoute: "“So many books, so little time.”",
        auther: "― Oscar Wilde"
    },
    {
        qoute: "“A room without books is like a body without a soul.”",
        auther: "― Marcus Tullius Cicero"
    },

    {
        qoute: "“Be the change that you wish to see in the world.”",
        auther: "― Mahatma Gandhi"
    }
]
var randomIndex = Math.floor(Math.random() * Qoute.length);
var randomObject = Qoute[randomIndex];
document.getElementById("Quote").innerHTML = randomObject.qoute;
document.getElementById("authoer").innerHTML = randomObject.auther;
var last_random = -1;
function newQoute() {
    //!  -----------------------solution to avoid repetition ---------------------------------
    // do {
    //     var randomIndex = Math.floor(Math.random() * Qoute.length);
    // } while (randomIndex == last_random);
    // last_random = randomIndex;
    //!  ---------------------------- another solution ---------------------------------------
    var randomIndex = Math.floor(Math.random() * Qoute.length);
    for (var iterator = 0; randomIndex == last_random; iterator++) {
        randomIndex = Math.floor(Math.random() * Qoute.length);
    }
    last_random = randomIndex;

    var randomObject = Qoute[randomIndex];
    document.getElementById("Quote").innerHTML = randomObject.qoute;
    document.getElementById("authoer").innerHTML = randomObject.auther;
}
