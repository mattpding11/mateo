
// Referencias HTML
const body = document.querySelector('#hiddenBody');
const onLoad = document.querySelector('#onLoad');
const navProfile = document.querySelector('#navProfile');
const navSkills = document.querySelector('#navSkills');
const navProject = document.querySelector('#navProject');
const navContact = document.querySelector('#navContact');

window.onscroll = () => {

    navProfile.style.color = '#1095c1';
    navSkills.style.color = '#1095c1';
    navProject.style.color = '#1095c1';
    navContact.style.color = '#1095c1';

    // Obtenemos la posicion del scroll en pantall
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if(scroll >= 0 && scroll < 777){
        navProfile.style.color = '#19b3e6';
    }

    if(scroll >= 700 && scroll <= 1600){
        navSkills.style.color = '#19b3e6';
    }

    if(scroll > 1600 && scroll <= 4041){
        navProject.style.color = '#19b3e6';
    }

    if(scroll > 4041){
        navContact.style.color = '#19b3e6';
    }


    //normal: #1095c1
    //hover: #19b3e6
}

window.onload = () =>{

    // Probar
    // setTimeout(() => {
    //     onLoad.style.display = 'none';
    //     body.style.overflow = 'visible';
    // },3000)

    onLoad.style.display = 'none';
    body.style.overflow = 'visible';
}


