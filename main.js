//needs to be changed
const firebaseConfig = {
  apiKey: "AIzaSyBLHTOsmfCYkDw_5wO-QaodKfw26p_Tv3E",
  authDomain: "chatbot-c1e4b.firebaseapp.com",
  projectId: "chatbot-c1e4b",
  storageBucket: "chatbot-c1e4b.appspot.com",
  messagingSenderId: "147533972055",
  appId: "1:147533972055:web:ef9e343a2509f887599912",
  measurementId: "G-2EMGCYVH9D",
  databaseURL:"https://chatbot-c1e4b-default-rtdb.firebaseio.com/"
};
  //upto this line
  
  firebase.initializeApp(firebaseConfig);
  var initial=0;
print("initial");


function fun_send(){
  //sent msg
  var id = document.getElementById("msg").value;
  let element = document.createElement('div');
  element.className = 'q1';
  let element2 = document.createElement('div');
  
  element2.className = 'sent';
  element2.innerHTML = id;
  element.appendChild(element2);
  
  let p1 = document.querySelector('div.chat');
  p1.appendChild(element);

//received msg
  var output;
  
  var index;
  for(let msg=0;msg<70;msg++){
 
  var firebaseRef = firebase.database().ref(msg);
  firebaseRef.once("value").then(function(snapshot){
    
    if(snapshot.exists()){
    var loginInfo=snapshot.val();
    for(let i in loginInfo){
   
    output = loginInfo[i];   
    if(output==id){    
    index=msg;
    print(index);
    }  
  }
  }else{
    for(let i=0;i<2;i++){
      if(i==0){
        var m1="I'm a newly built Bot and currently I'm unable to understand your message";
        
      }
      else if(i==1){
        var m1="Hope to help you with it soon.."

      }
      let element = document.createElement('div');
        element.className = 'q1';
        let element2 = document.createElement('div');
        
        element2.className = 'received';
        element2.innerHTML = m1;
        element.appendChild(element2);
        
        let p1 = document.querySelector('div.chat');
        p1.appendChild(element);
    }
    
    

  }

  }); 
    
      
///
}


    
}

function print(msg){
  var firebaseRef = firebase.database().ref(msg);
  firebaseRef.once("value").then(function(snapshot){
    
    if(snapshot.exists()){
    var loginInfo=snapshot.val();
    for(let i in loginInfo){
   
    output = loginInfo[i];   
    

      
    let regex = /[^a-z]/gi;
    let result = i.replace(regex, "");

    let element = document.createElement('div');
    element.className = 'q1';
    let element2 = document.createElement('div');
    
    element2.className = 'received';
    if(initial==0){
      element2.innerHTML =  output;
      
    }
    else{
      element2.innerHTML = result + ": " + output;
    }    
    element.appendChild(element2);   
    let p1 = document.querySelector('div.chat');
    p1.appendChild(element);       
    }
    initial=1;
  }else{
    for(let i=0;i<2;i++){
      if(i==0){
        var m1="I'm a newly built Bot and currently I'm unable to understand your message";
        
      }
      else if(i==1){
        var m1="Hope to help you with it soon..";

      }
      let element = document.createElement('div');
        element.className = 'q1';
        let element2 = document.createElement('div');
        
        element2.className = 'received';
        element2.innerHTML = m1;
        element.appendChild(element2);
        
        let p1 = document.querySelector('div.chat');
        p1.appendChild(element);
    }
    
    

  }

  }); 
}