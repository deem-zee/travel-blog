import './App.css';
import Header from './Header';
import data from './data';
import Card from './Card';



function App() {
  const cards = data.map((place, index) => {
    return(
        <Card
          key = {index}
          item = {place}
          isLast = {index + 1  === data.length}
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
