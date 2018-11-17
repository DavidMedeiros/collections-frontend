import React, { Component } from 'react';
import { Modal, Button, Form, Checkbox } from 'semantic-ui-react';
import './NewCollectionModal.scss'


class NewCollectionModal extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button compact floated='right' color='pink' onClick={this.show}>Nova Coleção</Button>

        <Modal size='tiny' open={open} onClose={this.close}>
          <Modal.Header>Crie uma coleção</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Nome</label>
                <input placeholder='Dê um nome para a sua coleção' />
              </Form.Field>

              <Form.TextArea label='Descrição' placeholder='Descreva a sua coleção' />

              <Modal.Actions>
                <Button className='saveNewCollection' inverted color='pink' floated='right' icon='checkmark' labelPosition='right' content='Salvar' />
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


