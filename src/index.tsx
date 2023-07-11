import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import './index.scss';
import { App } from './App';
import { PostsProvider } from './store/PostsContext';
import { UsersProvider } from './store/UsersContext';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <UsersProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </UsersProvider>
);
