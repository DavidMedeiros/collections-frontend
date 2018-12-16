import React from "react";
import { shallow } from "enzyme";
import Tracklist from "../components/Album/TracksList";

let tracks = [
  {album_id: "5c13443b33dd370023100938",
    length: "3:12",
    name: "Artpop",
    __v: 0,
    _id: "5c1344a833dd370023100939"},
  {album_id: "5c13443b33dd370023100938",
    length: "3:33",
    name: "Applause",
    __v: 0,
    _id: "5c1344a833dd370023100939"},
  {album_id: "5c13443b33dd370023100938",
    length: "4:01",
    name: "Venus",
    __v: 0,
    _id: "5c1344a833dd370023100939"},
  {album_id: "5c13443b33dd370023100938",
    length: "5:04",
    name: "Aura",
    __v: 0,
    _id: "5c1344a833dd370023100939"},
  {album_id: "5c13443b33dd370023100938",
    length: "4:24",
    name: "G.U.Y",
    __v: 0,
    _id: "5c1344a833dd370023100939"}];


const tracklistComponent = shallow(<Tracklist tracksLoaded={true} tracks={tracks}/>);

it("always renders a div", () => {
  expect(tracklistComponent.find('List'));
  expect(tracklistComponent.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = tracklistComponent.find('List');
    const wrappingDiv = divs.first();

    // component renders.
    expect(wrappingDiv.children()).toEqual(tracklistComponent.children());
  });
});

it("always renders all tracks name", () => {
  for (let i=0; i<5; i++) {
    expect(tracklistComponent.find('.trackName').get(i).props.children).toEqual(tracks[i].name);
  }
});

it("always renders all tracks length", () => {
  for (let i=0; i<5; i++) {
    expect(tracklistComponent.find('.trackDuration').get(i).props.children).toEqual(tracks[i].length);
  }
});
