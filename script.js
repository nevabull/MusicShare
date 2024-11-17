
const audioFiles = [
    "Ain't No Johnny Cash.m4a",
    "Catching Coconuts.m4a",
    "Ypu Can Take Me.m4a",
	"Mr Cowhand.m4a"
];

var mediaList = document.getElementById('mediaFiles');

audioFiles.forEach(file => {
    var listItem = document.createElement('div');
    
    
    const audio = document.createElement('audio');
    audio.setAttribute('controls','controls');
    audio.setAttribute('src',file);
    audio.setAttribute('label', file);

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href',file);
    downloadLink.setAttribute("Text", file)
    downloadLink.innerText = file;

   // listItem<HTMLAudioElement>appendChild(audio);
  //  listItem<HTMLAnchorElement>appendChild(downloadLink);
   
  //  var n = listItem.audio.createElement("file");
    mediaList.appendChild(audio);
	mediaList.appendChild(downloadLink);
});