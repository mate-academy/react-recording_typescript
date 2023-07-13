import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { PostsProvider } from './store/PostsContext';
import { UsersProvider } from './store/UsersContext';

import { NewPostPage } from './pages/NewPostPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { PostsPage } from './pages/PostsPage';
import { UsersPage } from './pages/UsersPage';
import { HomePage } from './pages/HomePage';

export const Root = () => (
  <Router>
    <UsersProvider>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="users">
              <Route path=":userId?" element={<UsersPage />} />
            </Route>

            <Route path="posts">
              <Route index element={<PostsPage />} />
              <Route path="620" element={<PostDetailsPage />} />
              <Route path="new" element={<NewPostPage />} />
            </Route>

            <Route path="*" element={<p>Not found</p>} />
          </Route>
        </Routes>
      </PostsProvider>
    </UsersProvider>
  </Router>
);
