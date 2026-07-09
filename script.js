// const defaultBackground = document.querySelectorAll("body");

let count = 0;

function myFun(data) {
    if (count <= 9) {
        if (count % 2 == 0) {
            document.getElementById(data.id).innerHTML="0"

        } else {
            document.getElementById(data.id).innerHTML="X"

        }
        count++;
        if (win()) {
            let winner = (count % 2 == 1) ? "O" : "X";
            winnerBackground()

            setTimeout(() => {
                alert("Winner : " + winner);
                reset()
                defaultBackground();
            }, 4000)
            
        }
        
    } else {
        alert("Math Draw");
        reset()
    }
    
}

function win() {
    if(check("div1", "div2", "div3") || check("div1", "div4", "div7") || check("div3", "div6", "div9") || check("div3", "div5", "div7") || check("div4", "div5", "div6") || check("div7", "div8", "div9") || check("div2", "div5", "div8") || check("div1", "div5", "div9")) {
        return true;
        
            
        }
}
function check(div1, div2, div3) {
    if(getData(div1) != "" && getData(div2) != "" && getData(div3)!= "" && getData(div1) == getData(div2) && getData(div2) == getData(div3)) {
        return true;
    }
}


function getData(div1) {
    return document.getElementById(div1).innerHTML;
}

function winnerBackground () {
    document.body.classList.add("winner-BG")

    // document.body.style.backgroundImage = "url('./Tic-Tac-ToeBackSuccess.gif')"
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundAttachment = "fixed"

}

function defaultBackground() {
    document.body.classList.remove("winner-BG")
    // document.body.style.backgroundImage = "url('radial-gradient(circle, #5c0067 0%, #00d4ff 100%)')"
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundAttachment = "fixed";

}



function reset() {
    count = 0;
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`div${i}`).innerHTML = "";
    }
}

