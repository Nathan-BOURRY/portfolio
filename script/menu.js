const menuItems = document.querySelectorAll('.container .menu li span');
const menu = document.querySelector('.menu');
menuItems.forEach((item, index) => {
            
    item.addEventListener('mouseenter', () => {
        menuItems.forEach((item, index) => {
            
            if (index !== null) {
                switch (index) {
                    case 0:
                        item.style.transform = `translateX(-20vw)`;
                        break;
                    case 1:
                        item.style.transform = `translateX(-10vw)`;
                        break;
                }
            }
        });
    });
});

menu.addEventListener('mouseleave', () => {
    menuItems.forEach((item, index) => {
        item.style.transform = `translateX(0)`;
    });
});