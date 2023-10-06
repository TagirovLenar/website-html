const defaultSelect = () => {
    const element = document.querySelectorAll(".header__select");
    element.forEach(element => {
        const choices = new Choices(element, {
        searchEnabled:false,
        shouldSort:false,
        itemSelectText: ''
    });
    
    });
};

defaultSelect(); 

