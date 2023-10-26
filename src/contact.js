function myContact() {
    const mainContainer = document.querySelector('#content');
    mainContainer.innerHTML = "";
    const contactContainer = document.createElement('div');
    contactContainer.textContent = "Contact Information";
    
    mainContainer.appendChild(contactContainer);
}

export { myContact };