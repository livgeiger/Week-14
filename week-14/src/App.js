import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="card text-white bg-primary mb-3">
          <img className="card-img-top" style={{ maxHeight: 400, maxWidth: 200 }} src="/images/AmericanGraffiti.jpg" alt="American Graffiti Movie Poster"></img>
          <div className="card-body">
            <h5 className="card-title">American Graffiti</h5>
            <p className="card-text">A movie where the entire plot takes place over one night and nothing much happens, in a good way.</p>

          </div>
        </div>

        <div className="card text-white bg-primary mb-3">
          <img className="card-img-top" style={{ maxHeight: 400, maxWidth: 200 }} src="/images/PridePrejudice.jpg" alt="Pride and Prejudice Movie Poster"></img>
          <div className="card-body">
            <h5 className="card-title">Pride and Prejudice</h5>
            <p className="card-text">Are we more attracted to Colin Firth or Jennifer Ehle? Yes.</p>

          </div>
        </div>
        <div className="card text-white bg-primary mb-3">
          <img className="card-img-top" style={{ maxHeight: 400, maxWidth: 200 }} src="/images/ThatThingYouDo.jpg" alt="That Thing You Do Movie Poster"></img>
          <div className="card-body">
            <h5 className="card-title">That Thing You Do</h5>
            <p className="card-text">"Staying in a four star hotel while our record climbs the charts... those lying snakes!" Also, Liv Tyler and Steve Zahn.</p>

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
