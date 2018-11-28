import React, { Component } from 'react';
import {Header, Grid, Container} from 'semantic-ui-react';
import './CollectionHeader.scss'

class CollectionHeader extends Component {
  render() {
    return (
      <Grid className='collectionHeader'>
        <Grid.Row columns={3}>
          <div className='cucu'>
            <Container>
              <Grid.Column >
                <Header as='h1'>
                  <Header.Content > 90's Collection
                    <Header.Subheader>ut placerat orci nulla pellentesque dignissim enim sit amet
                      venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem
                      fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa
                      placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in
                      ante metus dictum at tempor commodo ullamcorpers</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Container>
          </div>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CollectionHeader;


