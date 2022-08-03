function getSongsBySingerName(singerName){
    let URL= `https://itunes.apple.com/search?term=${singerName}&limit=25`;
    const promise =fetch(URL);
    return promise;
}
// function getSongsBySingerName(singerName,convert){
//     let xmlHTTPrequest = new XMLHttpRequest();
//     xmlHTTPrequest.onreadystatechange = function(){
//         if(this.readyState== 4 && this.status==200){
//             console.log(this.responseText)
//             convert(this.responseText);
//         }
//     }
//     xmlHTTPrequest.open("GET",URL);
//     xmlHTTPrequest.send(null); 
// }