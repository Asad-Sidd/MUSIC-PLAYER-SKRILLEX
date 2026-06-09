
        let prog=document.getElementById("prog");
        let song=document.getElementById("song");
        let ctrlicon=document.getElementById("ctrlicon");

        //WHEN THE SONG DATA IS LOADED, THIS FEEDS IT TO THE PROGRESS BAR
        song.onloadedmetadata =function(){
            prog.max=song.duration;
            prog.value=song.currentTime;
        }
    
        //FUNCTION THAT CHANGES THE PLAY PAUSE ICON WHEN CLICKED
        function playpause(){
            if(ctrlicon.classList.contains("fa-pause")){
                song.pause();
                ctrlicon.classList.remove("fa-pause");
                ctrlicon.classList.add("fa-play")
            }
            else{
                song.play();
                ctrlicon.classList.remove("fa-play");
                ctrlicon.classList.add("fa-pause");
            }
        }
            //REFRESHES THE POSITOIN OF THE PROGRESS BAR EVERY 0.5 SECONDS SO IT APPEARS MOVING
            setInterval(() => {
                prog.value=song.currentTime;
            }, 500);

            //CHANGES THE SONG TO THE POSITION WHERE PROGRESS BAR IS CLICKED 
            prog.onchange=function(){
            song.currentTime=prog.value;
            }