import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';

import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  // Cálculo assim que a pagina inicia (React Hooks / comportamento do componente)
  // Desestruturando do retorno desta função
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
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

    // Array que contem apenas os indices dos elementos que sao titulos
    const indices: number[] = [];

    // Se um item for um titulo, insere o index do mesmo dentro do arrat de index
    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          {/* Lista dos itens criados */}
          <FlatList<Item>
            data={data}
            // Recebe o item e renderiza o mesmo na tela, utilizando o metodo render ja definido na função useMemo
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            // Indice dos elementos que farão o efeito sticky
            stickyHeaderIndices={indices}
            // Refresh Efrect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
