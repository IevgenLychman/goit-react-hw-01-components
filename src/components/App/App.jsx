import { Container } from './App.styled';
import { User } from '../User/User';
import user from '../Statistics/user.json';

export const App = () => {
  return (
    <Container>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
