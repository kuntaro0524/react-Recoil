import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    name: `ヒラタくにお ${val}`,
    imgsrc: "https://source.unsplash.com/yihlaRCCvd4",
    tel: "999999999",
    email: "kuntaro@gmail.coim",
    company: {
      name: "RIKEN",
      tel: "0791-58-2839"
    },
    website: "https:google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2> ユーザのページですよ </h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
