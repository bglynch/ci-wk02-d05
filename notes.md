<!-- JQUERY -->
Jquery needs to come before javascript

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

Editing Text
$("#logoNav").html();
- "CODE INSTITUTE"

$("#logoNav").html("ACME Cheap Projectors Ltd.");
- "ACME Cheap Projectors Ltd."

$("#logoNav").html("ACME <em>Crap</em> Projectors Ltd.");
- "ACME Cheap Projectors Ltd."

$("#my_footer p").text("Not Copyrighted Anymore");
- changes the text of the footer paragraph

$("#my_footer").append("<p>This is a new copyright footer</p>");
- add another paragraph to the footer

$("#my_footer.remove()")
- removes my_footer element and all child elements

$("body.empty()")
- removes all child elements of body

$("p").addClass("new").removeClass("old");
- adding and removing classes
- 

$(document).ready(function(){
    <!--All scripts go here-->
})
- use this so scripts dont load until the document is ready