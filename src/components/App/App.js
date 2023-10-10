import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme/theme';
import { Container } from './App.styled';
import PageTitle from '../PageTitle/PageTitle';
import EventBoard from '../EventBoard/EventBoard';

import events from '../../temp/upcoming-events.json';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageTitle title="24th Core Worlds Coalition Conference" />
        <EventBoard events={events} />
      </Container>
    </ThemeProvider>

  );
}

export default App;