import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import NewCollectionModal from "./NewCollectionModal/NewCollectionModal";
import CollectionsList from "./CollectionsList/CollectionsList";

class MyCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teste: []
    }
  }

  search = event => {
    console.log(event);
    this.setState({ teste: event});
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Header as='h1' >
            <Header.Content > Minhas Coleções
              <Header.Subheader>
                Explore as suas coleções, adicone novos itens e compartilhe com seus amigos
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>

        <Grid.Column width={4}>
          <NewCollectionModal onChange={this.search}/>
        </Grid.Column>

        <Grid.Row>
          <CollectionsList teste={this.state.teste}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MyCollections;
