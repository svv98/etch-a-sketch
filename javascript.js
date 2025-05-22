const grid=document.querySelector('.container');
const changeGrid=document.querySelector('.changeGrid');
let divi;
getGrid(4);

function getGrid(num){
    grid.replaceChildren();
    for(let i=0;i<num;i++){
        const divi=document.createElement('div');
        divi.classList.add('divi');
        for(let j=0;j<num;j++){
            const div=document.createElement('div');
            div.classList.add('div');
            divi.appendChild(div); 
        }
        grid.appendChild(divi);
    }
    hover();
}

changeGrid.onclick=()=>{
let num=prompt('Select number of squares per side \n MAX 100',0);
while(num>100){
    alert('no can do');
    num=prompt('Select number of squares per side \n MAX 100',0);
}
getGrid(num);
};

// Extra Credit - Random Hover Colors & Opacity
function hover(){
    const divs = document.querySelectorAll('.div');
    const head=document.querySelector('head');
    const style=document.createElement('style');
    let opacity=0;

    divs.forEach((div)=>{
        div.addEventListener("mouseenter", function(){
        let randomR=Math.floor(Math.random()*256);
        let randomG=Math.floor(Math.random()*256);
        let randomB=Math.floor(Math.random()*256);

        if(opacity==0){
            style.textContent=`.div:hover{background-color:rgb(${randomR},${randomG},${randomB},0);}`;
            opacity++;  
        }else if(opacity<10){
            let o=opacity/10;
            style.textContent=`.div:hover{background-color:rgb(${randomR},${randomG},${randomB},${o});}`;
            opacity++
        }else{
            style.textContent=`.div:hover{background-color:rgb(${randomR},${randomG},${randomB},1);}`;
            opacity=0;
        }

        head.appendChild(style);
        });
    });

}


