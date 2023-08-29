const menuItems = document.querySelectorAll('.container .menu li'); 

menuItems[2].addEventListener('mouseenter', () => {
    menuItems[0].style.transform = 'translateX(0)';
    menuItems[1].style.transform = 'translateX(0)';
});

menuItems[2].addEventListener('mouseleave', () => {
    menuItems[0].style.transform = 'translateX(20vw)';
    menuItems[1].style.transform = 'translateX(10vw)';
});