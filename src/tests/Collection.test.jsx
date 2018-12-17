import React from "react";
import { shallow } from "enzyme";
import Collection from "../components/Collection/Collection";
import AlbumsList from "../components/Collection/AlbumsList";
import CollectionHeader from "../components/Collection/CollectionHeader";
import CollectionStatistic from "../components/Collection/CollectionStatistic";
import SearchAlbums from "../components/Collection/SearchAlbums";

let user = {
  bio: "apokdad",
  _collections: [
    "5c133362e2a44300230c43b3"
  ],
  _following_users: [],
  _following_collections: [],
  _followers: [],
  _liked_collections: [],
  _id: "5c132868e2a44300230c43b0",
  name: "davidmedeiros",
  username: "davidmedeiros",
  email: "david.souza@ccc.ufcg.edu.br",
  image: "https://scontent.fcpv3-1.fna.fbcdn.net/v/t1.0-9/35542978_1902384269792299_1789579522098593792_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpv3-1.fna&oh=5b89e34679a2c840b9aea7af60224be6&oe=5C643B07",
  __v: 0
};

let collection = {
  description: "Descrição da minha coleção",
  _items: [
    "5c13443b33dd370023100938"
  ],
  _followers: [],
  _likes: [],
  _id: "5c133362e2a44300230c43b3",
  name: "Pop Divas",
  image: "https://scontent.fcpv3-1.fna.fbcdn.net/v/t1.0-9/35542978_1902384269792299_1789579522098593792_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpv3-1.fna&oh=5b89e34679a2c840b9aea7af60224be6&oe=5C643B07",
  _owner: "5c132868e2a44300230c43b0",
  __v: 0
};

let album = [{genres:["pop","rock","dance"],
  _tracks:["5c1344a833dd370023100939"],
  _id:"5c13443b33dd370023100938",
  name:"Born This Way",
  released_date:"2011",
  released_type:"album",
  artist_id:"5c13440633dd370023100937",
  copyright:"Interscope 2011c",
  image:"https://cdna.artstation.com/p/assets/images/images/006/429/074/medium/ewan-velazquez-tumblr-mfgqa9ehlu1ra44sfo1-1280.jpg?1498528840",
  artist_name:"Lady Gaga",__v:0
}];

let match = {
  params: { albumId: "5c133362e2a44300230c43b3"}
};
const collectionComponent = shallow(<Collection match={match}/>);
collectionComponent.setState({ collectionLoaded: true, albumsLoaded: true, collection: collection, albums: album, user: user });

it("always renders a div", () => {
  expect(collectionComponent.find('div'));
  expect(collectionComponent.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = collectionComponent.find('div');
    const wrappingDiv = divs.first();

    // component renders.
    expect(wrappingDiv.children()).toEqual(collectionComponent.children());
  });
});

it("always renders a CollectionHeader", () => {
  expect(collectionComponent.find(CollectionHeader).length).toBe(1);
});

it("always renders an AlbumList", () => {
  expect(collectionComponent.find(AlbumsList).length).toBe(1);
});

it("always renders a CollectionStatistic", () => {
  expect(collectionComponent.find(CollectionStatistic).length).toBe(1);
});

it("always renders a SearchAlbum", () => {
  expect(collectionComponent.find(SearchAlbums).length).toBe(1);
});
