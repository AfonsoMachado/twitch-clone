import React from 'react';
import { Text } from 'react-native';
import Header from '../../components/Header';

import { Container, Wrapper, Main } from './styles';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />

        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
