
#Land Scape Project

##JavaScript file

##/////////////////// sections variables //////////////////


##/////////////////// sections variables //////////////////

 * make variables of the sections part
##//////////////////////  nav variables ////////////////////////////////
* make variables of the nav part
 * create ul element for the nav part
* ##first function related to the nav part
 * make function to loop over the sections 
 * create nav items which are <li> and <a> tags and appending them to the ul tag
 * extracting data-nav attributes values from sections and give each of them to the textContent of the each of links in nav part
 * set data-section attribute for <a> and give to each value of the refrenced sections's id and that for the usage after that in the scrollIntoview Method
 * adding styles to anv items
##sections part
* ##declare options variable which is will used after that in the IntersectionObserver constructor
 * consists of root : null   mean that web server api will be the root
 * threshold : 0.3   mean that if 0.3 of the section onle will be shown in the screen it will gain the active state
 * rootMargin : "-150px 0px 0px 0px"  it considered to be an ordinary margin but to the the root 
* ##make IntersectionObserver constructor
 * it needs two parameters : the first is internal function , the second is options
 * first parameter :
 **internal function : it need two paramenters
 ** first paramenetr will be (entries) which represent the sections 
 ** second parameter which is the the same constuctor it self
 ** loop for each entry which maen loop for each section
 ** make if condition that state in the case of the section not intersect the visible screen we will remove the active class from it
 ** and in case of opposite to that condition or in the intersection or the active state it wiil gain the active class
 ** loop over each <a> in the nav and get the textContent of each <a>
 ** get the data-nav attribute value of the intersecting visible section on the screen
 ** if the data-nav equal the textContet of each anchor then it is the active case then gain the anchor green background
 ** else give it navy background
 * second parameter : 
 * is options which is declared before the function
 *  *[refrence to IntersectionObserver constructor](https://www.youtube.com/watch?v=RxnV9Xcw914)
##loop for each section to apply the IntersectionObserver constructor to each section
* ##scroll part
 * 
 * get the data-section attribute of each anchor 
 * because of each of sections has id equals to the data-nav attribute of the refrenced anchor to it
 * inquire about the element thet has id eqauls to the data-section of clicked anchor in the case of clicking the anchor by addEventListenet method
 * in the case of clicking the anchor it will scrolled to the section that have that id
 * make the scroll be smooth an locate the section in the center by apply scrollItoView method to the chosen section
 * ##scrollItoView method :
 ** has two parameters :
 **the first is about the behavior of the transfer between each two items (smooth)
 **the second is about the way of represented the selected item as in the first of the screen or in the center or in the end
 *[refrence to scroll function](https://www.youtube.com/watch?v=23JQzsz9BlY)


