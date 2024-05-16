const { default: styled } = require("styled-components");

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin: 20px 0px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button``;
const StyledButton = styled(Button)`
  background: transparent;
  border: 1px solid green;
  border-radius: 5px;
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: blue;
  }
`;

export { Title, Container, StyledButton };
