const themeButton = document.querySelector(".theme-button");
const changeBackground = ()=>{
    const color = Math.floor(Math.random()* 0xffffff).toString(16);
    document.body.style.background=`#${color}`; 
}

themeButton.addEventListener('click', changeBackground);