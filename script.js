function convertToVoice() {
   let textInput = document.getElementById("text-input");
   let text = textInput.value.trim();
   if (text === "") {
      alert("Please enter some text to convert.");
      return;
   }
   let speechSynthesis = window.speechSynthesis;
   let speechText = new SpeechSynthesisUtterance(text);
   speechSynthesis.speak(speechText);
}