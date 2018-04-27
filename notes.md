<!-- JQUERY -->

Javascript
- getElementById("score")

Jquery Equivilent
- $("#score")

Jquery: dollarSign("selector").actions

Jquery Selecting
- selectv an id         $("#idName")
- selectv an class      $("".className")
- selectv an element    $("p")


<!--CSS: selecting children or all decendants-->
.myText a {}  - selects all a decendants of .myText
.myText > a{} - selects only direct children of .myText  

Can apply same principals to Jquery

Jquey also has sudo-selectors
eg 
$("img:first")  - selects first image on the page
$("img:last")  - selects last image on the page
$(":header")    - selects all h1 to h6 tags