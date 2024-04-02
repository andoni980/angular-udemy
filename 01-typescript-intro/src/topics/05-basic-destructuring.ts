
// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }

// interface Details {
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: "Mess",
//     details: {
//         author: 'Ed Sheeran',
//         year: 2015
//     }
// }

// DESESTRUCTURACION DE OBJETOS

// const song = 'NewSong';
// console.log(song);

// const { song: audioPlayerSong, songDuration: duration, details: {author, year} } = audioPlayer;
// const { song: audioPlayerSong, songDuration: duration } = audioPlayer;
// const { author, year } = audioPlayer.details;

// console.log('Song: ' , audioPlayerSong);
// console.log('Duration: ', duration)
// console.log('Author: ', author);
// console.log('Year: ', year);


// DESESTRUCTURACION DE ARREGLOS

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks = dbz[3];
console.error('Personaje 3: ', trunks || 'No hay personaje en ese indice');

const [, , trunkss = 'Not found']= dbz;
console.log('Personaje 3: ', trunkss);


export{};