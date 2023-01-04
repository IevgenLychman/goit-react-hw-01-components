import { Container } from './App.styled';

import { Profile } from '../Profile/Profile';
import profile from '../Datas/profile.json';

import { Statistics } from '../Statistics/Statistics';
import data from '../Datas/data.json';

import { FriendList } from '../FriendList/FriendList';
import friends from '../Datas/friends.json';

import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../Datas/transactions.json';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
