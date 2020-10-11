const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings =['hello you little tom ','yes hello nonsence'];
const weather =['todays weather is like your mood soo sad']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function() {
   document.write("now speak");
    console.log('now you can speak');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textcontent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', ()=>{

    recognition.start();
});

function readOutLoud(message){

 
    const speech = new SpeechSynthesisUtterance();
    Speech.text='i did not get what you say';
 
      if (message.includes('hi')){
          const finalText = greetings[Math.floor(Math.random() * greetings.length)];
          speech.text = finalText;

      }

    Speech.volume =1;
    Speech.rate=1;
    Speech.pitch=1;
    
    window.SpeechSynthesis.speak(speech);
}
