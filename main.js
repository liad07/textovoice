function texttosspeech() {
    var speech=new SpeechSynthesisUtterance();
    var text=document.getElementById("text").value
    var lang=document.getElementById("lang").value
    speech.text=text
    speech.pitch=1
    speech.volume=1
    speech.lang=lang
    speech.rate=1
    speechSynthesis.speak(speech)
}
