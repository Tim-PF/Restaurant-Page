import Fork from "./assets/images/fork.svg"
import Knife from "./assets/images/knife.svg"

function myHome() {
    //Main Div
    const mainContainer = document.querySelector('#content');

    //Empty page
    mainContainer.innerHTML = "";

    //Main Container with background full width
    const homeContainer = document.createElement('div');
    homeContainer.classList.add("homepage")

    // Create DIV to center in 'homeContainer'

    const centerContainer = document.createElement('div')
    centerContainer.classList.add('center')

        // Image / div / img inside Center DIV
         const myFork = new Image();
         myFork.src = Fork;
         myFork.classList.add("imageFork")

         centerContainer.appendChild(myFork);

         const nameContainer = document.createElement('div');
         nameContainer.classList.add('name-container');

         centerContainer.appendChild(nameContainer);


         const myKnife = new Image();
         myKnife.src = Knife;
         myKnife.classList.add("imageKnife")

         centerContainer.appendChild(myKnife);

           // Inside DIV h1(Name) h3(Italian Specialities) div
         const   titleContainer = document.createElement('div')
            titleContainer.classList.add('titleContainer')
         const   subTitleContainer = document.createElement('div')
             subTitleContainer.classList.add('subTitle')
         const  bottomInfoContainer = document.createElement('div')
             bottomInfoContainer.classList.add('bottomText')
            
            // Add h1 to titleContainer
         const   restaurantTitle = document.createElement('h1')
            restaurantTitle.classList.add('title')
            restaurantTitle.textContent = "Kristin."
            titleContainer.appendChild(restaurantTitle)

           // add h3 to titleContainer
            const   restaurantSubTitle = document.createElement('h3')
            restaurantSubTitle.classList.add('subTitle')
            restaurantSubTitle.textContent = "Italian Specialities"
            subTitleContainer.appendChild(restaurantSubTitle)

          // add text to bottomInfo
            const restaurantInfo = document.createElement('h4')
            restaurantInfo.classList.add('textInfo')
            restaurantInfo.textContent = "GOOD FOOD | RED WINE";
            bottomInfoContainer.appendChild(restaurantInfo)

            // Append all Container to nameContainer
            nameContainer.appendChild(titleContainer)
            nameContainer.appendChild(subTitleContainer)
            nameContainer.appendChild(bottomInfoContainer)
              // Div with decorative lines and text 



    //Append centerContainer to homeContainer

    homeContainer.appendChild(centerContainer)
    
    //Append to Main DIV
    mainContainer.appendChild(homeContainer);
}

export { myHome };