import { elements, clearLoader } from './base.mjs';
import {alternateMode, isDark} from './changeMode.mjs';


//Toggle the 'save' button 
export const toggleLike = () => {
   
};

export const toggleLikeMenu = () => {
    var favButton = document.querySelector('.fa-heart');
    var resultsContainer = document.querySelector("#resultsContainer");
    const actionButtons = [ favButton];


    actionButtons.forEach(el => {
        el.onclick = function()
        {
            if(document.querySelector('.pointer'))
            {
                document.querySelector('.pointer').style.display="none";
            }
            document.querySelector("#likeOverlay").classList.toggle("show");
            if(document.querySelector("#likeOverlay").classList == 'overlay show')
            {
                about.textContent='';
                resultsContainer.style.display="none";
                favButton.style.display="none";
                
            }
            else
            {
                resultsContainer.style='display: none';
                about.textContent = 'About';
                favButton.style.display="inline-block";
            }
        }});
};

export const renderLike = like => {
    
    let markup = `
			<li class="likedElement">
                <a class="likes__link" href="#${like.id}">
                    <div class="info-container ${isDark()}">
                        <h1 class="lightblue"><a href="" class="lightblue">${like.name}</a></h1>
                        <h2>Address: ${like.address}</h2>
                        <h3>Phone#: ${like.phone}</h3>
                        <h3 class="lightblue"><a href=""class="lightblue">Get Directions</a></h3>
                        <a class="delete__brewery" id="brewery__${like.id}" style="color: #ff4444" href="#${like.id}">Delete</a>
                    </div>
                </a>
            </li>
    `;
    //Remove hash from URL
    history.replaceState(null,null,' ');
    elements.likeList.insertAdjacentHTML('beforeend', markup);
}

export const deleteLike = id =>
{
    // grab child element from parent.
    const el = document.querySelector(`#brewery__${id}`);
    if(el) el.parentNode.remove();
}
