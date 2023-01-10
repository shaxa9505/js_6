"use strict"

const numberOfSeries = +prompt("Nechta serial ko'rdingiz");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false
}

const a = prompt("Oxirgi ko’rgan serialingiz?", "")
const b = +prompt("Nechi baxo berasiz?", "")
const c = prompt("Oxirgi ko’rgan serialingiz?", "")
const d = +prompt("Nechi baxo berasiz?", "")

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);