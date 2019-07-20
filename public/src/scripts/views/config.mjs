import {elements} from './base.mjs';

export const toggleConfigModal = () => {
    elements.configToggle.onclick = () => {
    elements.configModal.classList.toggle('show');
    elements.configToggle.classList.toggle('exit');

    elements.configModal.classList.contains('show') ? elements.heart.style.display="none" : elements.heart.style.display="inline-block";

    if(elements.configToggle.classList.contains('exit'))
    {
        elements.configToggle.classList.add('far');
        elements.configToggle.classList.add('fa-times-circle');
        about.style.display="none";
        
    }
    else
    {
        elements.configToggle.classList.remove('far');
        elements.configToggle.classList.remove('fa-times-circle');
        about.style.display="list-style";
    }
}};