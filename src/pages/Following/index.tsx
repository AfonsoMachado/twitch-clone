import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';

import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  // Cálculo assim que a pagina inicia (React Hooks / comportamento do componente)
  React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <View />,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <View />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <View />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <View />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <View />,
      },
    ];
  }, []);

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
