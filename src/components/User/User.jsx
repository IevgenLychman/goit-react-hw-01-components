import PropTypes from 'prop-types';

import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsList,
  UserLabel,
  UserQuantity,
} from './User.styled';

export const User = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>
      <UserStats>
        <UserStatsList>
          <UserLabel> Followers </UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </UserStatsList>
        <UserStatsList>
          <UserLabel> Views </UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </UserStatsList>
        <UserStatsList>
          <UserLabel> Likes </UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </UserStatsList>
      </UserStats>
    </UserProfile>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
