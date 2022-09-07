import styled from 'styled-components';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';

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
  padding: 40px 120px;
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
  padding: 15px 20px;
  background-color: #ffc226;
  color: Black;
  cursor: pointer;
  margin-bottom: 10px;
  
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Consent = styled.p`
  font-size: 12px;
`


const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="e-mail" />
          <Input placeholder="phone number" />
          <Input placeholder="Type a password" />
          <Input placeholder="Retype password" />
          <Button>Create</Button>
          <Consent>
            By creating an account, I consent to the processing of my personal
            data in accordance with the PRIVACY POLICY.
          </Consent>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
