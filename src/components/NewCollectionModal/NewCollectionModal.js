import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import './NewCollectionModal.scss'
import API from "../../api";


class NewCollectionModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: '', description: '', imageURL: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

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
    this.setState({ open: false, name: '', description: '', imageURL: '' });

    const collection = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.imageURL
    };

    API.post('collection', collection)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button compact floated='right' color='pink' onClick={this.show}>Nova Coleção</Button>

        <Modal size='tiny' open={open} onClose={this.close}>
          <Modal.Header>Crie uma coleção</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Nome</label>
                <input placeholder='Dê um nome para a sua coleção' value={this.state.name}
                       name='name' onChange={this.handleInputChange} />
              </Form.Field>

              <Form.TextArea label='Descrição'
                             placeholder='Descreva a sua coleção' value={this.state.description}
                             name='description' onChange={this.handleInputChange}/>
              <Form.Field>
                <label>Image URL</label>
                <input placeholder='Insira o link para uma imagem de capa da sua coleção' value={this.state.imageURL}
                       name='imageURL' onChange={this.handleInputChange}/>
              </Form.Field>

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


