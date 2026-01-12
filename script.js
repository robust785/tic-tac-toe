
let winningPositions=
[
    [0,1,2],
    [0,3,1],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
    
];

let resetBtn=document.querySelector("#resetBtn");
let boxes=document.querySelectorAll(".box");
let result=document.querySelector("#result")
let turnO=true;
let cnt=0;
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>
            {
                if(turnO)
                {

                    box.innerText="O";
                    
                }
                else
                {
                        box.innerText="X";

                }

                turnO=!turnO;
                box.disabled=true;
                cnt++;
                checkWinner();
            }
        );
    
    }
);

resetBtn.addEventListener("click",()=>{
    for(let i=0;i<9;i++)
    {
        
        boxes[i].disabled=false;
        boxes[i].innerText="";
    }
    result.innerText="";
    cnt=0;
});

const checkWinner= ()=>
{
    for(let i=0;i<8;i++)
    {
        // console.log(winningPositions[i][0],winningPositions[i][1],winningPositions[i][2]);
        // console.log(boxes[winningPositions[i][0]],boxes[winningPositions[i][1]],boxes[winningPositions[i][2]]);
        if(boxes[winningPositions[i][0]].innerText==="" || boxes[winningPositions[i][1]].innerText=="" || boxes[winningPositions[i][2]].innerText==="")
        {
                continue;
        }

        if(boxes[winningPositions[i][0]].innerText===boxes[winningPositions[i][1]].innerText && boxes[winningPositions[i][1]].innerText===boxes[winningPositions[i][2]].innerText)
        {
            result.innerText=   boxes[winningPositions[i][0]].innerText+" is the winner\n";

            for(let i=0;i<9;i++)
            {
                
                boxes[i].disabled=true;
        
            }

            turnO=true;

            break;
        }
    }
    if(cnt===9)
    {
        result.innerText="Draw";

    }
}