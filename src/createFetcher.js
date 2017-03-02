import fetch from 'isomorphic-fetch';

export default (url) => (graphQLParams) =>
  fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  })
  .then(response => response.json());
