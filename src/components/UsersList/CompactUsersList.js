import React, { Component } from 'react';
import { Card, List, Image, Button, Container } from 'semantic-ui-react';
import './CompactUsersList.scss'

class CompactUsersList extends Component {
  render() {
    return (
          <Card.Group>

            <Container >
              <List animated selection verticalAlign='middle' size='large'>
                <List.Item className='followingList'>
                  <List.Content floated='right'>
                    <Button className='unfollowButton' compact color='pink'>unfollow</Button>
                  </List.Content>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <List.Content>
                    <List.Header>David Souza</List.Header>
                    <List.Description>
                      <p className='followingUserBio'>@daviddzinho </p>
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item className='followingList'>
                  <List.Content floated='right'>
                    <Button className='unfollowButton' compact color='pink'>unfollow</Button>
                  </List.Content>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <List.Content>
                    <List.Header>David Souza</List.Header>
                    <List.Description>
                      <p className='followingUserBio'>@daviddzinho </p>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item className='followingList'>
                  <List.Content floated='right'>
                    <Button className='unfollowButton' compact color='pink'>unfollow</Button>
                  </List.Content>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <List.Content>
                    <List.Header>David Souza</List.Header>
                    <List.Description>
                      <p className='followingUserBio'>@daviddzinho </p>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item className='followingList'>
                  <List.Content floated='right'>
                    <Button className='unfollowButton' compact > follow</Button>
                  </List.Content>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <List.Content>
                    <List.Header>David Souza</List.Header>
                    <List.Description>
                      <p className='followingUserBio'>@daviddzinho </p>
                    </List.Description>
                  </List.Content>
                </List.Item>     <List.Item className='followingList'>
                <List.Content floated='right'>
                  <Button className='unfollowButton' compact color='pink'>unfollow</Button>
                </List.Content>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <List.Content>
                  <List.Header>David Souza</List.Header>
                  <List.Description>
                    <p className='followingUserBio'>@daviddzinho </p>
                  </List.Description>
                </List.Content>
              </List.Item>
              </List>
            </Container>
          </Card.Group>
    );
  }
}

export default CompactUsersList;


