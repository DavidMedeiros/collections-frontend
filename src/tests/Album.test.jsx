import React from "react";
import { shallow } from "enzyme";
import Album from "../components/Album/Album";
import Tracklist from "../components/Album/TracksList";

let album = {genres:["pop","rock","dance"],
  _tracks:["5c1344a833dd370023100939"],
  _id:"5c13443b33dd370023100938",
  name:"Born This Way",
  released_date:"2011",
  released_type:"album",
  artist_id:"5c13440633dd370023100937",
  copyright:"Interscope 2011c",
  image:"https://cdna.artstation.com/p/assets/images/images/006/429/074/medium/ewan-velazquez-tumblr-mfgqa9ehlu1ra44sfo1-1280.jpg?1498528840",
  artist_name:"Lady Gaga",__v:0
};

let tracks = {album_id: "5c13443b33dd370023100938",
  length: "4:24",
  name: "Marry The Night",
  __v: 0,
  _id: "5c1344a833dd370023100939"};

let match = {
  params: { albumId: "5c13443b33dd370023100938"}
};
const albumComponent = shallow(<Album match={match}/>);
albumComponent.setState({ album: album, tracks: tracks, albumLoaded: true, tracksLoaded: true });

it("always renders a div", () => {
  expect(albumComponent.find('div'));
  expect(albumComponent.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = albumComponent.find('div');
    const wrappingDiv = divs.first();

    // component renders.
    expect(wrappingDiv.children()).toEqual(albumComponent.children());
  });
});

it("always renders a Tracklist", () => {
  expect(albumComponent.find(Tracklist).length).toBe(1);
});

it("always renders an album title", () => {
  expect(albumComponent.find('Header').first().dive().text()).toEqual(album.name + ' |');
});

it("always renders an artist name", () => {
  expect(albumComponent.find('.albumArtist').last().dive().text()).toEqual(album.artist_name);
});

it("always renders an album detail - year + quantity of tracks", () => {
  expect(albumComponent.find('.albumDescription').first().dive().text()).toEqual(
    album.released_date + ' - ' + album._tracks.length + ' faixas');
});

it("always renders an album image", () => {
  expect(albumComponent.find('Image').first().dive().prop("src")).toEqual(album.image);
});

it("always renders a set of genres", () => {
  for (let i=0; i<3; i++) {
    expect(albumComponent.find('.genreLabel').get(i).props.children).toEqual(album.genres[i]);
  }
});
