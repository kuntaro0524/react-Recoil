import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return (
    <div>
      <SInput placeholder={placeholder} />
    </div>
  );
};

const SInput = styled.input`
  background-color: yellow;
  padding: 8px 16px;
  border-radius: 300px;
  border: solid #ddd 1px;
  outline: none;
`;
