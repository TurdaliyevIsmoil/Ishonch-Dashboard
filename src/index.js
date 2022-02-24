import "./js/script.js";
import "./style/style.css";
import "./less/style.less";
import "./scss/style.scss";
// Webpack settings
const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("./assets/img/", false, /\.(png|jpe?g|svg|PNG)$/)
);
const videos = importAll(
  require.context("./assets/video/", false, /\.(mp4|mov|avi)$/)
);
const audios = importAll(
  require.context("./assets/audio/", false, /\.(mp3|ogg|m4a)$/)
);
const files = importAll(
  require.context("./assets/file/", false, /\.(rar|zip|pdf)$/)
);

// Sidebar MENU Scripts
let toggleMenu = document.getElementById("toggle-menu");
let menuInner = document.getElementById("menu-inner");
let menuSpace = document.getElementById("menu-space");
let menuCloser = document.getElementById("menu-closer");

let accorditionBg = document.getElementsByClassName("accordation-bg");

for(let accor of accorditionBg){
  let accCount =0;
  accor.addEventListener('click',()=>{
   if(accCount%2 === 0){
    accor.style.backgroundColor="#99c922";
    accCount++
   }else {accor.style.backgroundColor="#0000";
   accCount++}
  })
}

toggleMenu.addEventListener("click", () => {
    menuInner.style.width = "230px";
    menuSpace.style.width = "230px";
    toggleMenu.style.display = 'none'
});
menuCloser.addEventListener("click", () => {
    menuInner.style.width = "0px";
    menuSpace.style.width = "0px";
    toggleMenu.style.display = 'block'
});

var nomzodlar = document.getElementById("nomzodlar");
var otkazmalar = document.getElementById("otkazmalar");
var ishOrin = document.getElementById("ishorin");
var murojaat = document.getElementById("murojaat");

var nomzodlarChart = new Chart(nomzodlar, {
  type: "pie",
  data: {
    labels: [
      "Yangi nomzodlar",
      "Dastlabki saralash",
      "Suhbatga chaqirilgan",
      "Ishga taklif qilingan",
      "Qora ro'yhatda",
      "Zahirada",
      "Bekor qilingan",
    ],
    datasets: [
      {
        data: [12, 12, 24, 24, 19, 23, 20],
        backgroundColor: [
          "#a8cf45",
          "Orange",
          "Yellow",
          "Green",
          "grey",
          "orange",
          "red",
        ],
      },
    ],
  },
  options: {
    legend: {
      position: "bottom",
      display: true
    },
    responsive: false,
    plugins: {
      datalabels: {
        color: "#fff",
        anchor: 'end',
        align: 'start',
        border: '1px'
      },
      
    },
  },
});
var otkazmalarChart = new Chart(otkazmalar, {
  type: "pie",
  data: {
    labels: [
      "Yaratilga",
      "Suhbatga qo'yilgan",
      "Yakunlangan",
      "Bekor qilingan",
    ],
    datasets: [
      {
        data: [12, 12, 24, 24],
        backgroundColor: ["#a8cf45", "Orange", "green", "red"],
      },
    ],
  },
  options: {
    legend: {
      position: "bottom",
    },
    responsive: false,
    plugins: {
      datalabels: {
        color: "#fff",
        anchor: 'end',
        align: 'start',
        border: '1px'
      },
    },
  },
});
var ishOrinChart = new Chart(ishOrin, {
  type: "pie",
  data: {
    labels: ["Bekor qilingan", "Yaratilgan", "Qabul qilinmoqda"],
    datasets: [
      {
        data: [12, 12, 24],
        backgroundColor: ["red", "#a8cf45", "Orange"],
      },
    ],
  },
  options: {
    legend: {
      position: "bottom",
    },
    responsive: false,
    plugins: {
      datalabels: {
        color: "#fff",
        anchor: 'end',
        align: 'start',
        border: '1px'
      },
    },
  },
});
var murojaatChart = new Chart(murojaat, {
  type: "pie",
  data: {
    labels: ["Yaratilgan", "Kutilmoqda", "So'rov tugatilgan", "Bekor qilingan"],
    datasets: [
      {
        data: [12, 12, 24, 19],
        backgroundColor: ["green", "#a8cf45", "Orange", "red"],
      },
    ],
  },
  options: {
    responsive: false,
    legend: {
      position: "bottom",
    },

    plugins: {
      datalabels: {
        color: "#fff",
        anchor: 'end',
        align: 'start',
        border: '1px'
      },
    },
  },
});
