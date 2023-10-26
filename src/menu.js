function myMenu() {
    const mainContainer = document.querySelector('#content');
    mainContainer.innerHTML = "";
    const menuContainer = document.createElement('div');
    menuContainer.textContent = "We all know this is gonna work -hopefully";
    
    mainContainer.appendChild(menuContainer);
}

export { myMenu };