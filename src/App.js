import './App.css';


function App() {

  const list = [
    {
      id: 1,
      name: "Bianca",
      location: "boston",
      followers: 100,
      following: 200,
    },
    {
      id: 2,
      name: "Jon",
      location: "Alabama",
      followers: 10,
      following: 300,
    }
  ];

   const handleInputChange = (e) => {
      console.log(e.target.value);
    }
  return (
    <div className="App">
      <h1>List</h1>

      <label htmlFor="name">Name:</label>
      <input id='name' name='name' type="text" onChange= {handleInputChange}></input>

    <ListItem list={list} />
    </div>
  );
}

  function ListItem(props) {
    return(
      props.list.map(item => (
      <ul key={item.id}>
      <li>Name: {item.name}</li>
      <li>Location: {item.location}</li>
      <li>Followers: {item.followers}</li>
      <li>Following: {item.following}</li>
      </ul>
      ))
    )}

export default App;

