function Student(props){
    // var list = "<ul>"
    // list += "<li><h3>Student data:{props.val}</h3></li>" 
    // list += "</ul>";
   var z = props.val1  

//     var newarr =  z.map(()=>{
//      for(var i=0; i<z.length;i++){
//         var v1=  props.val1[i];
//         }
        // return v1;
//    })

    // console.log(z);
// v += props.val[i];

    // var v ="<ul>";
    // for(var i=0; i<z.length;i++){
        // v += z[i];
    // } 
    // z.map((data)=>{
    //     // console.log("data = ",data);
    //     <ul>
    //     <li>{data}</li>
    //     </ul>   
    // })

    return(

        // <div style = {{backgroundColor:'skyblue',margin:'20px'}}>
        //     {/* <h1> Hello {props.name}</h1>
        //     <h2>email:{props.email}</h2> */}
        //     {/* <div>{props.val}</div> */}
            
        //     <ul>
        //         <li>{z[0]}</li>
        //         <li>{z[1]}</li>
        //         <li>{z[2]}</li>
        //         <li>{z[3]}</li>

        //     </ul>
        
        // </div>
    
        // in table
    //     <table border={2}>
    //         {z.map((data)=><tr><td>{data}</td></tr>)}
    //    </table>

    // in list
   
      <ul>
        {z.map((data)=><li>{data}</li>)}
      </ul>
    )
   
}
export default Student