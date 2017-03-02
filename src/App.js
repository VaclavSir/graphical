import React from 'react';
import { compose, withProps, withState } from 'recompose';
import './App.css';
import GraphiQL from 'graphiql';
import createFetcher from './createFetcher';
import 'graphiql/graphiql.css';

const App = ({ url, setUrl }) =>
  <div className="App">
    <input
      id="urlInputBar"
      type="url"
      value={url}
      onChange={event => setUrl(event.target.value)}
      placeholder="GraphQL server URL"
    />
    <GraphiQL fetcher={createFetcher(url)}/>
  </div>;

const enhance = compose(
  withState('url', 'setUrl', window.localStorage.getItem('graphical:url') || ''),
  withProps(({ setUrl }) => ({
    setUrl: (url) => {
      window.localStorage.setItem('graphical:url', url);
      setUrl(url);
    }
  }))
);

export default enhance(App);
