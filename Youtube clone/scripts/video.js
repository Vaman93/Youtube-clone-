let videos_Info = JSON.parse( localStorage.getItem("videos_Info"))
console.log('videos_Info:', videos_Info)


let Showing_the_video = document.getElementById("Showing_the_video")


Showing_the_video.innerHTML = `
<div class="leftSide_showing_video">
        <div class="video_div">
            <iframe width="851px" height="500px" src="https://www.youtube.com/embed/${videos_Info.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video_tit">
            <h3>${videos_Info.title}</h3>
          <div class="viwes_like">
            <p>15,35,756 <sup>•</sup> 09-Dec-2019</p>
            <div class="Like_dislike">
                <i class="far fa-thumbs-up"> Like</i>
                <i class="far fa-thumbs-down"> DISLIKE</i>
                <i class="far fa-share-square"> SHARE</i>
                <i class="fas fa-save"> SAVE</i>
                <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>

        <div class="channel_div">
            <div class="channel_img">
                <img src="https://i.ytimg.com/vi/zdp0zrpKzIE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhzsaCoAG-6QtY5boNamjYfpWddw" alt="">
                
            </div>
            <div class="channel_name">
                <p>${videos_Info.channelTitle}</p>
                <p>125K subscribe</p>
            </div>
            <div class="subscribe_button">
                <button>SUBSCRIBE</button>
            </div>
        </div>
        <div class="video_dec">
            <p>${videos_Info.dec}</p>
        </div>

    </div>

    <div class="rightSide_suggection">

    </div>
`


let showmeanutrue = "true"    

function showthemean() {
if(showmeanutrue === "true") {
  document.getElementById("silder_meanu").classList = "active"
  showmeanutrue = "false" 
} else{
    document.getElementById("silder_meanu").classList = ""
    showmeanutrue = "true"  
}
}
