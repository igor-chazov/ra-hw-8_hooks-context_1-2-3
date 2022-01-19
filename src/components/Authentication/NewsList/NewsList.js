import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import News from '../News/News';
import links from '../utility/links';

export default function NewsList() {
  const { token } = useContext(AuthContext);

  const [data, loading] = useJsonFetch(`${links}/private/news`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    <div className="news-list">
      {loading && (<div className="news-list__loading">Загрузка...</div>)}
      {!loading && data && (
        data.map((item) => <News key={item.id} data={item} />)
      )}
    </div>
  );
}
