import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const Content = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlankPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <h1>Questions</h1>
      </Header>
      <Content>
        <h2> Page Content</h2>
      </Content>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Container>
  );
};

export default BlankPage;
