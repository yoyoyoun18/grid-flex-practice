import { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './burgerkingImg.png';
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);


  return (
    <div className="App">
      <div className='container'>
        <Card className={"card menu-1"} title={posts[0].title} content={posts[0].content} />
        <Card className={"card menu-2"} title={posts[0].title} content={posts[0].content}/>
        <Card className={"card menu-3"} title={posts[0].title} content={posts[0].content}/>
        <Card className={"card menu-4"} title={posts[0].title} content={posts[0].content}/>
        <Card className={"card menu-5"} title={posts[0].title} content={posts[0].content}/>
        <Card className={"card menu-6"} title={posts[0].title} content={posts[0].content}/>
        <Card className={"card menu-7"} title={posts[0].title} content={posts[0].content}/>
        </div>
    </div>
  );
}

export default App;
