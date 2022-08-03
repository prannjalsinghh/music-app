window.addEventListener('load',bindEvents);
function bindEvents(){
    document.querySelector("#search").addEventListener('click',getSingerName);
}
function getSingerName(){
    let singerName= document.querySelector("#singerName").value;
    if(singerName && singerName.length >0){ 
      const promise=   getSongsBySingerName(singerName,convert);  
      promise.then(response=>{
          response.json().then(songs=>{
              printSongs(songs['results']);
              
          }).catch(err=>{
              console.log("invalid json",err);
          }).catch(err=>{
              console.log("server unavailable",err);
          })
      }) ;
    }

}
function convert(json){

    let songs= JSON.parse(json);
    console.log(songs);
    const allSongs= songs['results'];
    printSongs(allSongs);
}
function printSongs(allSongs){

    let outputDiv= document.querySelector("#output");
    outputDiv.innerText=""
    allSongs.forEach(song=>{

        let div= document.createElement('div');
        let img= document.createElement('img');
        img.src= song['artworkUrl100'];
        
        div.appendChild(img);
        let songName= document.createElement('p');
        songName.innerText= song['trackCensoredName'];
        songName.style.fontWeight='500';
        div.appendChild(songName);
        let audio= document.createElement('audio');
        audio.controls= true;
        audio.style.width= '500px'
        // audio.style.paddingTop= '0px';
        audio.src= song['previewUrl'];
        div.appendChild(audio);
        div.style.margin= ' 30px';
        outputDiv.appendChild(div);
    })
}