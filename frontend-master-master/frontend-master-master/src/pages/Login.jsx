import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://www.news-medical.net/images/news/ImageForNews_704692_16450308930134291.jpg')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 40px 20px;
  background-color: aliceblue;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 10px;
  background-color: #ffc226;
  color: Black;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkItem = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <LinkItem>FORGOT YOUR PASSWORD?</LinkItem>
          <Link to='/signUp' style={{textDecoration: 'none', color: 'black'}}><LinkItem>CREATE AN ACCOUNT!</LinkItem></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
