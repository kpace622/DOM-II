// Your code goes here

//Click
let logoChange = document.querySelector('.nav-container');
logoChange.addEventListener('click', () => {
    logoChange.style.backgroundColor = 'green'

    
});
//propagation example with above code.
let navbarChange = document.querySelector('.logo-heading');
navbarChange.addEventListener('click', (event) => {
    navbarChange.style.color = "skyblue"
    event.stopPropagation();
})

//Mouseover
let navChange = document.querySelectorAll('.nav-link');
navChange.forEach(link => {
    link.addEventListener('mouseover', (event) => {
        link.style.color = 'skyblue';
        event.preventDefault();
        
    });
});

//Mouseenter
let headerChange = document.querySelector('.intro img');
headerChange.addEventListener('mouseenter', () => {
    headerChange.style.visibility = 'hidden'
})

//Mouseleave
headerChange.addEventListener('mouseleave', () => {
    headerChange.style.visibility = 'visible'
})

//Doubleclick
let bodyEvent = document.querySelector('body');
bodyEvent.addEventListener('dblclick', () => {
    alert('Surprise!')
})

//Wheel
let pChange = document.querySelectorAll('p')
pChange.forEach(wheel => {
    wheel.addEventListener('wheel', () => {
        wheel.style.color = 'green'
    })    
})

//contextmenu
let imgChange = document.querySelector('.img-content img');
imgChange.addEventListener('contextmenu', () => {
    imgChange.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"   
})

//mousemove
let middleImgChange = document.querySelector('.img-fluid')
middleImgChange.addEventListener('mousemove', () => {
    middleImgChange.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
})

//mouseup
let bottomImgChange = document.querySelector('.content-destination img');
bottomImgChange.addEventListener('mouseup', () => {
    bottomImgChange.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
})

//mouseout
let containerChange = document.querySelectorAll('.nav-link')[1];
containerChange.addEventListener('mouseout', () => {
    containerChange.style.visibility = "hidden"
})
