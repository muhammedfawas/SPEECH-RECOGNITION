// call window object speech recognition..
window.SpeechRecognition = window.SpeechRecognition ||
 window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 var p=document.createElement("p");// creat html element
 var words=document.getElementById("words");
 words.appendChild(p);
 console.log(p); // up to here imp


 recognition.addEventListener("result", e =>{
     
     var transcript =[...e.results]
     .map(result =>result[0])
     .map(result =>result.transcript)
     .join('');
     console.log(transcript);
  // p.innerHTML=transcript;
   if (e.results[0].isFinal){
       p=document.createElement("p");
       words.appendChild(p);
       p.innerHTML =transcript;
   }
 });//dom method to listen event.
 recognition.addEventListener('end',recognition.start)
 recognition.start(); // strt speech
