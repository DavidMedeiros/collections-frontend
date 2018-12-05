import React, { Component } from 'react';
import { Card, List, Image, Button, Container } from 'semantic-ui-react';
import './CompactUsersList.scss'

class CompactUsersList extends Component {
  render() {
    const _following_users = [
      {
        "bio": "my bio description",
        "_collections": [],
        "_following_users": [
          "5bf5a77e1ad4952297680255"
        ],
        "_following_collections": [],
        "_followers": [],
        "_liked_collections": [],
        "_id": "5bf5a7241ad4952297680254",
        "name": "user",
        "username": "user",
        "email": "user@email.com",
        "birthday": "1195-12-16T13:15:20.000Z",
        "gender": "other",
        "__v": 0
      },
      {
        "bio": "my bio description",
        "_collections": [],
        "_following_users": [],
        "_following_collections": [],
        "_followers": [
          "5bf5a7241ad4952297680254"
        ],
        "_liked_collections": [],
        "_id": "5bf5a77e1ad4952297680255",
        "name": "daviddzinho",
        "username": "daviddzinho",
        "email": "david@email.com",
        "birthday": "1195-12-16T13:15:20.000Z",
        "gender": "other",
        "__v": 0
      }
    ];
    console.log(_following_users);
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
              </List.Item><List.Item className='followingList'>
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
              </List.Item><List.Item className='followingList'>
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
              </List.Item><List.Item className='followingList'>
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
              </List.Item><List.Item className='followingList'>
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
              </List.Item><List.Item className='followingList'>
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
              </List.Item><List.Item className='followingList'>
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
              </List.Item><List.Item className='followingList'>
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


