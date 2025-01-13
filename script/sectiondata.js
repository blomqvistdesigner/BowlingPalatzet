// sectiondata.js
const sectionsData = [
    {
        title: "Bowling",
        description: "Njut av bowling i vår moderna hall.",
        backgroundImage: "../images/background.jpg",
        buttonText: "Boka Bowling",
        buttonLink: "bowling.html"
    },
    {
        title: "Shuffleboard",
        description: "Utmana vännerna i shuffleboard.",
        backgroundImage: "../images/shuffleboard.jpg",
        buttonText: "Boka Shuffleboard",
        buttonLink: "shuffleboard.html"
    },
    {
        title: "Biljard",
        description: "Ta en runda biljard med kompisarna.",
        backgroundImage: "../images/poolbollar.jpg",
        buttonText: "Boka Biljard",
        buttonLink: "biljard.html"
    },
    {
        title: "Dart",
        description: "Spela dart i en trevlig miljö.",
        backgroundImage: "../images/dart.jpg",
        buttonText: "Boka Dart",
        buttonLink: "dart.html"
    },
    {
        title: "Proshop",
        description: "Välkommen in i våran butik.",
        backgroundImage: "../images/bowlingshop.jpg",
        buttonText: "Boka Tid",
        buttonLink: "proshop.html"
    },
    {
        title: "Barnkalas",
        description: "Vill du ha det perfekt barnkalaset? Då har du hittat rätt.",
        backgroundImage: "../images/barnkalas.jpg",
        buttonText: "Boka Barnkalas",
        buttonLink: "barnkalas.html"
    },
    {
        title: "Restaurang",
        description: "Här hittar du vår restaurang & meny.",
        backgroundImage: "../images/restaurang.jpg",
        buttonText: "Lunch meny",
        buttonLink: "restaurang.html"
    },
    {
        title: "Liga",
        description: "Här kan du se alla ligor.",
        backgroundImage: "../images/nogame.jpg",
        buttonText: null, // Lämna tom eftersom vi använder flera knappar
        buttonLink: null, // Inte relevant här
        buttons: [
            { text: "Div1", link: "https://www.sbhf.se/ligaservice/index.php/serie/index?parentId=8215" },
            { text: "Div2", link: "https://www.sbhf.se/ligaservice/index.php/serie/index?parentId=8216" },
            { text: "Div3", link: "https://www.sbhf.se/ligaservice/index.php/serie/index?parentId=8217" }
        ]
    }
];
