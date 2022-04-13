(function(){
  var name=["Yaakov", "John", "Paul", "sonu", "Larry","Jen", "Jimi", "bro", "Laura", "Jim"];
  for(var i=0;i<name.length;i++){
      var firstLetter=name[i].charAt(0).toLowerCase();
      if(firstLetter==='j'){
          byeSpeaker.speak(name[i]);
      }else{
          helloSpeaker.speak(name[i]);
      }
  }
})();