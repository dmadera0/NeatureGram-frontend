import React from 'react';
import './App.css';
import AllPosts from './Components/AllPosts';

class App extends React.Component{

  state = {
    allposts:[]
  }
  
  componentDidMount() {
    console.log("this need to log")
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => 
      this.setState({allposts: posts }))
    }
  

  render(){
    return (
      <div className="App">
        <h1>NeatureGram</h1>
        <main>
          <div className='login'>
            <section className='login'>
              <h2>Login/Logout</h2>
            </section>
            <section className='Posts'>
              <h2>All Posts</h2>
              <AllPosts
                posts={this.state.allposts}
              />
            </section>
        </div>
        </main>
      </div>
    )
  }
}

export default App;
