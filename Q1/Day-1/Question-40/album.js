"use strict";
function make_album(artist, title, tracks) {
    const album = {
        name: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album('Queen', 'A Night at the Opera');
let album2 = make_album('The Beatles', 'Abbey Road', 17);
let album3 = make_album('Pink Floyd', 'Dark Side of the Moon', 10);
console.log(album1);
console.log(album2);
console.log(album3);
