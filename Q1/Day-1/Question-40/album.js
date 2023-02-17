"use strict";
function make_album(artist, title) {
    const album = {
        artist: artist,
        title: title,
    };
    return album;
}
const album1 = make_album('Daft Punk', 'Random Access Memories');
console.log(album1);
const album2 = make_album('The Beatles', 'Abbey Road');
console.log(album2);
const album3 = make_album('Pink Floyd', 'The Dark Side of the Moon');
console.log(album3);
