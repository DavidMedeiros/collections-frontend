import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react'

import './Welcome.scss';

class Welcome extends Component {
  render() {
    return (
      <div className='tes' style={{ backgroundImage: 'blue' }}>

      <Grid columns={2}>
        <Grid.Row className='welcomeImage'>
          <Grid.Column>
            <p className='welcomeMainMessage'>
              Explore e interaja com
              <br/>
              <b>colecionadores</b> de discos do mundo inteiro.
            </p>

            <p className='welcomeSecondaryMessage'>
              Mantenha um controle na nuvem dos seus <b>álbums</b>,
              <br/>
              tenha acesso a <b>estatísticas</b> precisas, compartilhe com todos e muito mais.
            </p>

          </Grid.Column>
        </Grid.Row>
      </Grid> </div>
    );
  }
}

export default Welcome;
