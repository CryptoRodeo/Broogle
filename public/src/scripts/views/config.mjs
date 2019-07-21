import {elements} from './base.mjs';
import {toggleClosingButton} from './toggle.mjs'

export const toggleConfigModal = () => {
    elements.configToggle.onclick = () => {
    elements.configModal.classList.toggle('show');
    elements.configToggle.classList.toggle('exit');

    elements.configModal.classList.contains('show') ? elements.heart.style.display="none" : elements.heart.style.display="inline-block";

    if(elements.configToggle.classList.contains('exit'))
    {
        toggleClosingButton(elements.configToggle.classList.contains('exit'), elements.configToggle);
        
    }
    else
    {
        toggleClosingButton(elements.configToggle.classList.contains('exit'), elements.configToggle);
    }
}};