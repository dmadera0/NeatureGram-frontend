import React from 'react';
import PhotoGallery from './PhotoGallery'

import './App.css';

class App extends React.Component{

  state = {
    allPosts:[]
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => this.setState({allPosts: posts}))
  }
  render(){

    return (
      <div className="App">
      <header className="App-header">
     <h1>NeatureGram!</h1>
     <main>
      <section className='all-characters'>
      <h2>PhotoGallary</h2>
      <PhotoGallery>
      </section>
      <div className='sorted-characters'>
    <section className='alive'>
    <h2>My FavoritePhotos</h2>
      </section>
      <section className='deceased'>
    <h2>Login</h2>
    </section>
    </div>
    </main>
  
      </header>
    </div>
  );
}
}

export default App;
