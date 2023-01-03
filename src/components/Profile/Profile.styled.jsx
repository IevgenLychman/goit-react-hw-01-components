import styled from '@emotion/styled';

export const UserProfile = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAvatar = styled.img`
  background: lightgrey;
  width: 150px;
  border-radius: 50%;
  margin-top: 15px;
  margin-bottom: 0px;
`;

export const UserName = styled.p`
  margin-top: 15px;
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 20px;
`;

export const UserTag = styled.p`
  margin-top: 15px;
  margin-bottom: 0px;
  color: grey;
`;

export const UserLocation = styled.p`
  margin-top: 15px;
  margin-bottom: 30px;
  color: grey;
`;

export const UserStats = styled.ul`
  display: flex;
  padding: 0;
  font-size: 12px;
  margin: 0px;

  background: #e1e1e1;
`;

export const UserStatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-top: solid 1px #a5a5a5;
  :not(:last-child) {
    border-right: solid 1px #a5a5a5;
  }
`;

export const UserLabel = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

export const UserQuantity = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
