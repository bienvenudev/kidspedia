import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Books } from './pages/Books';
import { Impact } from './pages/Impact';
import { Gallery } from './pages/Gallery';
import { GetInvolved } from './pages/GetInvolved';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'books', element: <Books /> },
      { path: 'impact', element: <Impact /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
