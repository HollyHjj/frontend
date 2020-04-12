import React from "react";
import {useState} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// function App() {
//   return (
//     <div className="App">
//     <h1>My First React app</h1>
//     <p>Here we go!</p>
//     </div>
//   );
// }


// class SelectDate extends React.Component {
//   state = {
//     startDate: new Date()
//   };

//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//     console.log("now date",date);
//   };

//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }

// }

function App(){
  const [startDate, setStartDate] = useState(new Date("2020/04/08"));
  const [endDate, setEndDate] = useState(new Date("2020/04/12"));

  const handleStartDateChange = date => {
    setStartDate(date);
    console.log("set start date",date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
    console.log("set end date",date);
  };

 return (
   <>
     <DatePicker
       selected={startDate}
       //  onChange={date => setStartDate(date)}
       onChange = {handleStartDateChange}
       selectsStart
       startDate={startDate}
       endDate={endDate}
     />
     <DatePicker
       selected={endDate}
      //  onChange={date => setEndDate(date)}
      onChange = {handleEndDateChange}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
     />
   </>
 );
};





export default App;
