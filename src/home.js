function myHome() {
    const mainContainer = document.querySelector('#content');
    mainContainer.innerHTML = "";
    const homeContainer = document.createElement('div');
    homeContainer.textContent = "Just a test";
    
    mainContainer.appendChild(homeContainer);
}

export { myHome };