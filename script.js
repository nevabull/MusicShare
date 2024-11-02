
fetch('mediaFiles.json')
.then(response => response.json())
.then(files => {
    const mediaList = document.getElementById('mediaFiles');
    files.forEach(file => {
        const listItem = document.createElement('li');

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = file;

        const downloadLink = document.createElement('a');
        downloadLink.href = file;
        downloadLink.download = file.split('/').pop();
        downloadLink.textContent = 'Download';

        listItem.appendChild(audio);
        listItem.appendChild(downloadLink);
        mediaList.appendChild(listItem);
    });
})
.catch(error => console.error('Error fetching media files:', error));

