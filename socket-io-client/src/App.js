import React from 'react';
import { Chat } from './components/Chat/Chat';
import './css/Main.scss';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

  return ([
	<div id = "backend-test" style = {{position: 'absolute'}}>{!data ? "Loading..." : data}</div>,
  <Chat />
  ]);
}

export default App;
