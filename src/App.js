// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// from cloning the repo.

// function App() {
//  var arr = [];
//   function  add1(){
//     var a = document.getElementById('text1').value;
//     arr.push(a);
//     // document.getElementById('dis1').innerHTML = arr;
//     console.log(arr);
//   }

//   return (
//     <div className="App">
//       <input type="text" id='text1' />
//       <button onClick={add1}>Add</button>
//       <div id="dis1"></div>
//     </div>
//   );p
// }
// export default App;

// import Profile from "./Profile";
import Counter from "./Counter"
import { useEffect, useState } from "react";
import logo from './logo.svg';
import Student from "./Student";
function App(){
  // var [counter,setcouter]=useState("shrikunj")
  // function send() {
  //      setcouter(document.getElementById("text1").value)
  //    }

    //  --------------------------------------------------------

  //    var [temp,updtemp]= useState(0)
  //  function incnum(){
  //      updtemp(temp+1)
  // }

  // var arr = ["Shrikunj","shrikunjrawal@gmail.com",12,44];
  

  var arr =[];

  function dataadd(){
    var a = parseInt(document.getElementById('text1').value);
    arr.push(a);
  }

  function arr1(){
    var list ="<ul>"
    for(var i=0; i<arr.length; i++){
       list += "<li>" + arr[i] + "</li>"; 
    }
    list +="</ul>"
    return list;
  }

  // console.log("load1");
  // const  [temp,updtemp] = useState(0);
  // function inc(){
  //   updtemp( temp +1);
  // }
  // useEffect(()=>{
  //   console.log("load");
  // },[temp])
  
  return(
    <div className="App" >
      {/* <input type="text" id="text1"/> */}
       {/* <Counter  data={temp}/> */}
       {/* <Counter  data={counter}/> */}
        {/* <button onClick={send}>Click</button> */}
        {/* <button onClick={incnum}>increment</button> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1>Props in React</h1> */}
          {/* <Profile text={{name:'peter'}} data='Profile data'/>
          <Profile text={{name:'shrikunj'}} data='Fox data'/>
          <Profile text={{name:'arun'}} data='arun data'/>   
        </header> */}
        {/* <h1>props in react</h1> */}
       {/* <Student/> */}
       {/* <Student name={'shrikunj'} email='fake@gmail.com' other={{add:"surat" ,mobile:'000'}}/> */}
       {/* <Student  val1={arr}/> */}
       <input type="text" onClick={arr1} id="text1" />
       <button onClick={arr1}>Click</button>
       <button onClick={dataadd}>Add</button>
        {/* <Student studata=[]/> */}
        {/* <button onClick={inc}>clicks</button> */}
        {/* {temp} */}
          {arr}
        {/* {list} */}
    </div>
  );
}

export default App;