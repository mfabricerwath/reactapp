import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];


function App() {
  const welcome={
    greeting:'Hey',
    title:'React',
  };
  return (
    <div className="App">
      <header className="App-header">
       <h1>{welcome.greeting} Good morning {welcome.title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      </header>
    <hr/>
    <ul>
      {list.map(function(item){
        return <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>
            {item.author}
          </span>
          <span>
            {item.num_comments}
          </span>
          <span>
            {item.points}
          </span>
          
          </li>
      })}
    </ul>
    </div>
  );
}

export default App;
