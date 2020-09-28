import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.Text`
  color: ${colors.gray};
  /* Para quando um titulo sobrepor o outro */
  background: ${colors.primary};

  font-family: roboto_700;
  font-size: 14px;
  text-transform: uppercase;

  padding: 9px 0;
`;
