import React from 'react';
import styled  from 'styled-components';

 
function App() {
  return (
    <Container>
      <Button>Hello</Button>
      <Button danger>Hello</Button>
      <Anchor href="http://google.com">Go to Google</Anchor>
    </Container>
  );
}

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color:#999
`

const Button = styled.button`
  border-radius: 50px;
  border:none;
  padding:5px;
  min-width: 120px;
  color:#fff;
  font-weight:600;
  cursor: pointer;
  &:active,
  &:focus{
    outline:none;
  }
  background-color:${props => (props.danger ? "#2ecc71" : "#e74c3c")}
`

const Anchor = styled(Button.withComponent('a'))`
    text-decoration: none;
`;

export default App;
