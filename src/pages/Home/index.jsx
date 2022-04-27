import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import { PostDetail } from '../../components/PostDetail';

import styles from './styles.module.css';

export function Home() {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={e => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        <h1>Posts...</h1>
        {posts && posts.map(post => <PostDetail post={post} key={post.id} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
