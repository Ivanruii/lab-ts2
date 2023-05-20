import { Group } from './groupInterface';

const genre = {
    popRock: "🎵 Pop Rock",
    rock: "🎸 Rock",
    hardRock: "🤘 Hard Rock",
    classic: "🎼 Clásica"
}

const groupA : Group = {
    name: "The Beatles",
    foundation: 1960,
    active: true,
    genre: genre.popRock
}

const groupB : Group = {
    name: "Queen",
    foundation: 1970,
    active: false,
    genre: genre.rock
}

const groupC : Group = {
    name: "ACDC",
    foundation: 1973,
    active: true,
    genre: genre.hardRock
}

const groupD: Group = {
    name: "Ludwig van Beethoven",
    foundation: 1770,
    active: false,
    genre: genre.classic
}

const groupF: Group = {
    name: "The Rolling Stones",
    foundation: 1962,
    active: true,
    genre: genre.rock
}

console.log('%cGrupo A: %c%s', 'font-weight: bold; font-size: larger;', 'background-color: green; color: white;', groupA.name);
console.log('%cGrupo B: %c%s', 'font-weight: bold; font-size: larger;', 'background-color: green; color: white;', groupB.name);
console.log('%cGrupo C: %c%s', 'font-weight: bold; font-size: larger;', 'background-color: green; color: white;', groupC.name);
console.log('%cGrupo D: %c%s', 'font-weight: bold; font-size: larger;', 'background-color: green; color: white;', groupD.name);
console.log('%cGrupo F: %c%s', 'font-weight: bold; font-size: larger;', 'background-color: green; color: white;', groupF.name);