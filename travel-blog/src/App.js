import './App.css';
import Header from './Header';
import data from './data';
import Card from './Card'

function App() {
  const cards = data.map((place) => {
    return(
      <Card
        item = {place} 
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <main>
        {cards}
      </main>
    </div>
  );
}

export default App;
