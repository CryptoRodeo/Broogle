import { elements, clearLoader } from './base.mjs';


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
            if(document.querySelector('.pointer'))
            {
                document.querySelector('.pointer').style.display="none";
            }
            document.querySelector("#likeOverlay").classList.toggle("show");
            if(document.querySelector("#likeOverlay").classList == 'overlay show')
            {
                about.textContent='';
                resultsContainer.style.display="none";
                
            }
            else
            {
                resultsContainer.style='display: none';
                about.textContent = 'About';
                favButton.innerHTML = '<img src="./src/images/fav-heart.png">';
            }
        }});
};

export const renderLike = like => {
    let markup = `
			<li class="likedElement">
                <a class="results__link">
                    <div class="info-container">
                        <h1 class="lightblue"><a href="">${like.name}</a></h1>
                        <h2>Address: ${like.address}</h2>
                        <h3>Phone#: ${like.phone}</h3>
                        <h3 class="lightblue"><a href="">Get Directions</a></h3>
                        <a class="save__brewery" href="#${like.id}">Save</a>
                    </div>
                </a>
            </li>
    `;
    elements.likeList.insertAdjacentHTML('beforeend', markup);

};

// //Toggles the like menu.
// (function()
// {
//     actionButtons.forEach(el => {
//         el.onclick = function()
//         {
//             document.querySelector("#likeOverlay").classList.toggle("show");
//             if(document.querySelector("#likeOverlay").classList == 'overlay show')
//             {
//                 about.textContent='';
//             }
//             else
//             {
//                 about.textContent = 'About';
//                 favButton.innerHTML = '<img src="/assets/fav-heart.png">';
//             }
//         }
//     })
// })();

export const deleteLike = id =>
{
    //grab child element from parent.
    // const el = document.querySelector('')
}