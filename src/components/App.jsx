import { GlobalStyle } from './GlobalStyle';

import { Title } from './shared/Title/Title';
import { Phonebook } from './Phonebook/Phonebook';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>

      <Phonebook />
    </Layout>
  );
};
