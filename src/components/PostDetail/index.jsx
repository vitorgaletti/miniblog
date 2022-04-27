import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export function PostDetail({ post }) {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tagsArray.map(tag => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link className="btn btn-outline" to={`/posts/${post.id}`}>
        Ler
      </Link>
    </div>
  );
}
