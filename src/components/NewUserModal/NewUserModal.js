import React, { Component } from 'react';

import { Modal, Button, Form, TextArea } from 'semantic-ui-react';

import API from '../../api';

import './NewUserModal.scss';

class NewUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: '', username: '', password: '', email: '', bio: '', imageURL: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false, name: '', username: '', password: '', email: '', bio: '', imageURL: '' });

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

    const user = {
      name: this.state.name.trim(),
      username: this.state.username.trim(),
      password: this.state.password,
      email: this.state.email,
      bio: this.state.bio.trim(),
      image: this.state.imageURL.trim()
    };

    API.post('/api/user', user)
      .then(response => {
        this.close();
      }).catch(error => {
      console.log('new user error: ');
      console.log(error);
    });
  }

  render() {
    const { open } = this.state;

    const nameLength = this.state.name.trim().length;
    const usernameLength = this.state.username.trim().length;
    const bioLength = this.state.bio.trim().length;

    return (
      <div>
        <Button size='mini' onClick={this.show}>Cadastrar-se</Button>

        <Modal size='tiny' dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header>Faça parte da comunidade</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label='Nome'  placeholder='Insira o seu nome' value={this.state.name}
                          name='name' onChange={this.handleInputChange} maxLength='50' />
              <label className={(nameLength < 50) ? 'characterLabel' : 'characterLabelComplete'}>{ nameLength + '/50' }</label>

              <Form.Input required label='Username'  placeholder='Insira um username' value={this.state.username}
                          name='username' onChange={this.handleInputChange} maxLength='15' />
              <label className={(usernameLength < 15) ? 'characterLabel' : 'characterLabelComplete'}>{ usernameLength + '/15' }</label>

              <Form.Input required label='Password' type='password' placeholder='Insira uma senha forte' value={this.state.password}
                          name='password' onChange={this.handleInputChange} />

              <Form.Input required label='E-mail' type='email' placeholder='Insira um e-mail válido' value={this.state.email}
                          name='email' onChange={this.handleInputChange} />

              <Form.Field required control={TextArea} rows={2} label='Bio' placeholder='Escreva algo sobre você'
                          value={this.state.bio} maxLength='140'
                          name='bio' onChange={this.handleInputChange}/>
              <label className={(bioLength < 140) ? 'characterLabel' : 'characterLabelComplete'}>{ bioLength + '/140' }</label>

              <Form.Input required label='Foto'
                          placeholder='Insira o link de uma imagem que será utilizada no seu perfil' value={this.state.imageURL}
                          name='imageURL' onChange={this.handleInputChange} />

              <Modal.Actions>
                <Button className='saveNewUser' inverted type='submit' color='pink' floated='right'
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

export default NewUserModal;