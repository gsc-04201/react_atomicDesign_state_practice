import React, { memo } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
import Image from "../../organisms/user/human.jpg";
import { userState } from "../../../store/userState";
import { useRecoilValue } from "recoil";

export const UserIconWithName = memo((props) => {
  const userInfo = useRecoilValue(userState);
  console.log("UserIconWithName");
  const { name } = props;
  // const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SIcon height={160} width={160} src={Image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SIcon = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;