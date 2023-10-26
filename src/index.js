import { myHome } from './home';
import { myMenu } from './menu';
import { myContact } from './contact';

createTabs();

function createTabs() {
 


//Create Tabs
 const homeTab  = document.createElement('div');
 const menuTab = document.createElement('div');
const  contactTab  = document.createElement('div');
 
 //Create classes for each Tab and Text

 homeTab.classList.add("home");
 homeTab.textContent = "Home";

 menuTab.classList.add("menu");
 menuTab.textContent = "Menu";

 contactTab.classList.add("contact");
 contactTab.textContent = "Contact";

 // Create EventListener
 homeTab.addEventListener('click', () => {
  myHome();
 });

 menuTab.addEventListener('click', () => {
    myMenu();
   });

contactTab.addEventListener('click', () => {
    myContact();
   });


 // Append to body

 document.body.appendChild(homeTab)
 document.body.appendChild(menuTab)
 document.body.appendChild(contactTab)

}

console.log('Hello, this is the source file my friend.');