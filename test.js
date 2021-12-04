var data = [
    { 
     "name": "Mike", 
     "age": 36
    },
    { 
     "name": "Jack", 
     "age": 28
    }]
   
 function myFunction(){ 
    // Delete jack (object) from data
    data.splice(0);
    console.log(data);
   }
   myFunction()
   
   