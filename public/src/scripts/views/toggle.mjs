// Toggles the closing buttonß

export const toggleClosingButton = (isToggled, changeButton) => {
    if(isToggled)
    {
        changeButton.classList.add('far');
        changeButton.classList.add('fa-times-circle');
    }
    else
    {
        changeButton.classList.remove('far');
        changeButton.classList.remove('fa-times-circle');
    }
}