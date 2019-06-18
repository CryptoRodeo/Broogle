import { elements } from './base.mjs';



//Toggle the 'save' button 
export const toggleLike = () => {
   
};

export const toggleLikeMenu = () => {
    var about = document.querySelector("#aboutLink");
    var favButton = document.querySelector('#fav-heart');
    var closeButton = document.querySelector("#closeLikePage");
    var resultsContainer = document.querySelector("#resultsContainer");
    const actionButtons = [ favButton,closeButton ];

    actionButtons.forEach(el => {
        el.onclick = function()
        {
            document.querySelector("#likeOverlay").classList.toggle("show");
            if(document.querySelector("#likeOverlay").classList == 'overlay show')
            {
                about.textContent='';
                document.querySelector("#resultsContainer").onclick = function()
                {
                    alert("i am selected");
                }
            }
            else
            {
                about.textContent = 'About';
                favButton.innerHTML = '<img src="/assets/fav-heart.png">';
            }
        }});
}

export const deleteLike = id =>
{
    //grab child element from parent.
    // const el = document.querySelector('')
}