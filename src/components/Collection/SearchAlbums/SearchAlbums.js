import _ from 'lodash'

import React, { Component } from 'react';

import { Search, List, Button, Image, Header, Icon} from 'semantic-ui-react'

import axios from "axios/index";
import "./SearchAlbums.scss"

class SearchAlbums extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  handleAddAlbum = (e, { value }) => {
    const { onChange } = this.props;
    onChange(value);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      let searchOption;
      if (this.props.searchByName) {
        searchOption = 'name';
      } else {
        searchOption = 'artist';
      }

      axios
        .get('/api/album/search?' + searchOption + '=' + value)
        .then(response => {
          const albums = response.data;

          this.setState({
            isLoading: false,
            results: albums,
          });
        });

    }, 300)
  };

  render() {
    const { value, results } = this.state;
    let searchResult;

    if(results.length > 0) {
      searchResult = (
        <div className="searchResult">
          <List divided selection verticalAlign='middle' size='large'>
            {results.map(album => (
              <List.Item key={album._id}>
                <List.Content floated='right'>
                  <Button className='addAlbum' circular color='pink' size='mini' value={ album._id } icon='add' onClick={this.handleAddAlbum}/>
                </List.Content>
                <Image width={50} height={50} src={ album.image } />
                <List.Content>
                  <List.Header className='albumName'>{ album.name }</List.Header>
                  <List.Description>
                    <p className='albumDescription'> { album.released_type } - { new Date(album.released_date).getUTCFullYear() } </p>
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      );
    } else if(results.length < 1 && value.length > 0) {
      searchResult = (
        <div style={{ padding: 15 + 'px' }} className="searchResult">
          <Header color='pink' size='tiny'>
            <Icon name='times circle outline' />
            <Header.Content> Álbum não encontrado
              <Header.Subheader content='Certifique-se que fez uma busca correta'>
              </Header.Subheader>
            </Header.Content>
          </Header>
        </div>
      );
    }

    return (
      <div>
        <Search placeholder='Encontre albums e adicione-os à coleção' loading={false} showNoResults={false}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}/>
        { searchResult }
      </div>
    )
  }
}

export default SearchAlbums;


