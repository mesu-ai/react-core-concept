import logo from './logo.svg';
import './App.css';

function App() {

  const details=[
    {name:'akkas',mobile:+88017},
    {name:'khokkas',mobile:+88016},
    {name:'tokkas',mobile:+88016},
    {name:'sakkas',mobile:+88013}
  
  ];

  return (
    <div className="App">

      {details.map(detail=><PersonDetails name={detail.name} mobile={detail.mobile}></PersonDetails>)}

    </div>
  );
}


function PersonDetails(props){
  return(

    <div className="details">
      <h3>Name: {props.name}</h3>
      <h4>Phone: {props.mobile}</h4>
    </div>

  );


}



export default App;
