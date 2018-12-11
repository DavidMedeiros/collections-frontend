import React, { Component } from 'react';

import { Modal, Button, Form, TextArea } from 'semantic-ui-react';

import axios from "axios/index";

import './NewCollectionModal.scss';

class NewCollectionModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: '', description: '', imageURL: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false, name: '', description: '', imageURL: '' });

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const collection = {
      name: this.state.name.trim(),
      description: this.state.description.trim(),
      image: this.state.imageURL.trim()
    };

    axios
      .post('/api/collection', collection)
      .then(response => {
        if (response.status === 201) {
          const { onChange } = this.props;
          onChange(response.data.data);
        }
      }).catch(error => {
      console.log('new collection error: ');
      console.log(error);
    });

    this.close();
  }

  render() {
    const { open } = this.state;

    const nameLength = this.state.name.trim().length;
    const descriptionLength = this.state.description.trim().length;

    return (
      <div>
        <Button compact floated='right' color='pink' onClick={this.show}>Nova Coleção</Button>

        <Modal size='tiny' open={open} onClose={this.close}>
          <Modal.Header>Crie uma coleção</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label='Nome'  placeholder='Dê um nome para a sua coleção' value={this.state.name}
                          name='name' onChange={this.handleInputChange} maxLength='23' />
              <label className={(nameLength < 23) ? 'characterLabel' : 'characterLabelComplete'}>{ nameLength + '/23' }</label>

              <Form.Field required control={TextArea} label='Descrição' placeholder='Descreva a sua coleção'
                          value={this.state.description} maxLength='250'
                          name='description' onChange={this.handleInputChange}/>
              <label className={(descriptionLength < 250) ? 'characterLabel' : 'characterLabelComplete'}>{ descriptionLength + '/250' }</label>

              <Form.Input required label='Foto de Capa'
                          placeholder='Insira o link para uma imagem de capa da sua coleção' value={this.state.imageURL}
                          name='imageURL' onChange={this.handleInputChange} />

              <Modal.Actions>
                <Button className='saveNewCollection' inverted type='submit' color='pink' floated='right'
                        icon='checkmark' labelPosition='right' content='Salvar' />
                <Button floated='right' onClick={this.close}>Cancelar</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default NewCollectionModal;