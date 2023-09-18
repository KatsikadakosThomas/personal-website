
"use client"
import {useEffect} from "react"
export default function typewriter(){

     useEffect(() => {
        var words = [' Javascript', ' Next.js', ' React', ' Mongodb', ' Docker',"Git","Node.js","Redux", "Tailwind","Mysql", "Express.js","Material-UI","Nginx"];
        var part;
        var i = 0;
        var offset = 0;
        var len = words.length;
        var forwards = true;
        var skip_count = 0;
        var skip_delay = 15;
        var speed = 70;
    
        var wordElement = document.querySelector('.word');
        console.log( wordElement.textContent)
    
        var wordflick = function () {
            setInterval(function () {
                if (forwards) {
                    if (offset >= words[i].length) {
                        ++skip_count;
                        if (skip_count == skip_delay) {
                            forwards = false;
                            skip_count = 0;
                        }
                    }
                }
                else {
                    if (offset == 0) {
                        forwards = true;
                        i++;
                        offset = 0;
                        if (i >= len) {
                            i = 0;
                        }
                    }
                }
                part = words[i].substr(0, offset);
                if (skip_count == 0) {
                    if (forwards) {
                        offset++;
                    }
                    else {
                        offset--;
                    }
                }
                wordElement.innerHTML = part;
            }, speed);
        };
 
            wordflick();
      
    
     }, []);
  

    return(
        <h1 className="flex flex-row ">
            <span className=" text-white text-center text-xl font-bold ">I work with </span>&nbsp; 
<span className="word m-[auto] text-cyan-400 text-center text-xl font-bold h-10"></span>
        </h1>
        
    )
}