$carousel = document.getElementById("carousel");
$suivant = document.getElementById("suivant");

// Vous aurez besoin de ce genre de choses :
// $carousel.style.borderColor = "#f00";
var marge = 0;
function suivant() {
     marge -= 400;
    if (marge == -400 * $carousel.children.length) {
    	marge = 0;
    }
    $carousel.children[0].style.marginLeft=marge + "px";

}

$suivant.onclick = suivant;