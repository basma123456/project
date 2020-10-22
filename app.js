
/** 
##/////////////////// sections variables //////////////////
*/
/**
 * make variables of the sections part
 */
const myContainer = document.getElementById('myContainer');  


const mySections = document.querySelectorAll('section');


/** 
##//////////////////////  nav variables ////////////////////////////////
*/
/**
 * make variables of the nav part
 * create ul element for the nav part
 */

const navContainer = document.getElementById('myNav');
const navUl = document.createElement('ul');
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ##first function related to the nav part
 
 * @description make function to loop over the sections 
 * @return create nav items which are <li> and <a> tags and appending them to the ul tag
 * extracting data-nav attributes values from sections and give each of them to the textContent of the each of links in nav part
 * set data-section attribute for <a> and give to each value of the refrenced sections's id and that for the usage after that in the scrollIntoview Method
 * adding styles to anv items
 */



mySections.forEach(mySection => {
//for(let i=0; i< mySections.length; i++){
    
    //for the sections part


    //for the nav part
    const navLi = document.createElement('li');

    const myLink = document.createElement('a');

    const navName = mySection.getAttribute('data-nav');

    myLink.textContent = navName;
/////////////////////////////////////////////////////////////
    const secId = mySection.getAttribute('id');

    myLink.setAttribute('data-section',secId);  //set data-section for a for the usage after that in the scrollIntoview Method
/////////////////////////////////////////////////////////////



    navLi.insertAdjacentElement('afterBegin' ,myLink);  //locate the <a> tag inside the <li> tag

    navUl.appendChild(navLi);



    



    //add style to nav items

    
    navLi.style.cssText = "display:inline; padding:13px; background-color:navy;  color:white;";
    navUl.style.cssText = "margin-top:0;";


});

navContainer.appendChild(navUl);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//##sections part


/**
 * declare options variable which is will used after that in the IntersectionObserver constructor
 * consists of root : null   mean that web server api will be the root
 * threshold : 0.3   mean that if 0.3 of the section onle will be shown in the screen it will gain the active status
 * rootMargin : "-150px 0px 0px 0px"  it considered to be an ordinary margin but to the the root 
 */

const options = {

    root : null,
    threshold : 0.3,
    rootMargin : "-150px 0px 0px 0px"
};
/////////////////////////////////////////////////////

/**
 * ##make IntersectionObserver constructor
 * @description observing element
 * @param {call back function} it needs two parameters : the first is internal function , 
 
 * first parameter :
                ////////////////////////////////////////////////////////////////////////////////////////////////
                 **call back function : 
                 
                 ** @description its inside the constructor as a parameter to it which is A function 
                 which is called when the percentage of the target element is visible crosses a threshold. The callback receives as input two parameters
                 
                 ** @param {entries} represent the sections which is An array of IntersectionObserverEntry objects, 
                 each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
                 
                 ** @param {observer} the name of hte constructor which is The IntersectionObserver for which the callback is being invoked.

                 ** @return loop for each entry which maen loop for each section
                 ** make if condition that state in the case of the section not intersect the visible screen we will remove the active class from it
                 ** and in case of opposite to that condition or in the intersection or the active state it wiil gain the active class
                 ** loop over each <a> in the nav and get the textContent of each <a>
                 ** get the data-nav attribute value of the intersecting visible section on the screen
                 ** if the data-nav equal the textContet of each anchor then it is the active case then gain the anchor green background
                 ** else give it navy background
                 //////////////////////////////////////////////////////////////////////////////////////////////////
                 
 * @param {options} the second is options represent properties of the view port or the visible part of the entry which is now reprsented in the screen 
 
 * @return  A new IntersectionObserver which can be used to watch for the visibility of a target element within the specified root 
 crossing through any of the specified visibility thresholds. Call its observe() method to begin watching for the visibility changes on a given target.
 
 *  [refrence to IntersectionObserver constructor](https://www.youtube.com/watch?v=RxnV9Xcw914)
 */

///////////////////////////////////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries,observer) => {

    entries.forEach(entry => {

       // console.log(entry);
       if(!entry.isIntersecting){

        entry.target.classList.remove('activeClass');

        return;

       }
       //

       const allLink = document.querySelectorAll('a');

            
        //  
        
        entry.target.classList.add('activeClass');

            allLink.forEach(oneA => {

                const aName = oneA.textContent;

                const dataNav = entry.target.getAttribute("data-nav");

                if(aName == dataNav){
                    oneA.style.backgroundColor = 'green';

                }else{
                    oneA.style.backgroundColor = 'navy';

                }


                   


            });


    });

}, options);

////////////////////////////////////////////////////////////////////

/**
 * @description loop for each section to apply the IntersectionObserver constructor to each section
 */

 mySections.forEach(mySection => {


    observer.observe(mySection);

});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * ##scroll part
 * get the data-section attribute of each anchor 
 * because of each of sections has id equals to the data-nav attribute of the refrenced anchor to it
 * inquire about the element thet has id eqauls to the data-section of clicked anchor in the case of clicking the anchor by addEventListenet method
 * in the case of clicking the anchor it will scrolled to the section that have that id
 * make the scroll be smooth an locate the section in the center by apply scrollItoView method to the chosen section
 
         ** ##scrollItoView method :
         ** @descreption push element to certain destination by smooth scroll or
         The Element interface's scrollIntoView() method scrolls the element's parent container
         such that the element on which scrollIntoView() is called is visible to the user
         
         ** has two parameters :
         ** @param {behavior} behavoir of scroll or 
            Defines the transition animation.
            One of auto or smooth. Defaults to auto, but we choose smooth
         ** @param {block} 
         Defines vertical alignment or
         the way of showing the targeted element in a certain destination we choose here  center
         
         
         **@return smooth scroll to a certain targeted element in a certain destination
         
 *[refrence to scroll function](https://www.youtube.com/watch?v=23JQzsz9BlY)
 */

const links = document.querySelectorAll('a');

links.forEach(link => {




        link.addEventListener("click" , () => {

            const sec = document.getElementById(link.getAttribute('data-section'));



        sec.scrollIntoView({behavior:"smooth" , block:"center"});

    });

});





////////////////////////////////////////////////////////////////

/**
 * 
 */


const firstSection = document.getElementsByTagName('section')[0];

const topBtn = document.getElementById('topBtn'); 




const optionsTwo = {

    root : null,
    threshold : 0.1,
    rootMargin : "-150px 0px 0px 0px"
};


/**
 * constructor observorTwo
 * @description InterSectionObserver constructor make loop to each entry 
  and make if conditional case of not intersecting 
  
 * @param {entries} An array of IntersectionObserverEntry objects, 
 each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
 
 * @param {options}  // represented properties of the entry
 or An optional object which customizes the observer. If options isn't specified, the observer uses the document's viewport as the root,
 with no margin, and a 0% threshold (meaning that even a one-pixel change is enough to trigger a callback)
 
 * @returns in case of not intersecting of the entry to the view port 
 * the display method of the (top button) will be block else it will gain  none  
 * 
 */


const observerTwo = new IntersectionObserver((entries,observerTwo) => {

    entries.forEach(entry => {

       if(!entry.isIntersecting){

            topBtn.style.display = "block";

                topBtn.addEventListener("click" , () => {

                    firstSection.scrollIntoView({behavior:"smooth" , block:"center"});
                });






    
            
    



        return;

       }else{            
        topBtn.style.display = "none";


       }
       //

    });



}, optionsTwo);



observerTwo.observe(firstSection);

///////////////////////////////////////////////////////////////////////////////////////////////////






















