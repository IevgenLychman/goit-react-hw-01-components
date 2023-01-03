import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import profile from '../Statistics/profile.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
    </Container>
  );
};
