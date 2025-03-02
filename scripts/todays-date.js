const todaysDate=document.getElementById("todays-date");
const today=new Date();
const dateFormat=today.toLocaleDateString('en-US' , {
    weekday:'long',
    month:'long',
    day:'numeric',
    year:'numeric'

});

todaysDate.textContent=dateFormat;