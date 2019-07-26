import uniqid from 'uniqid'; //Generates a unique id for each element.

export default class List
{
    constructor()
    {
        this.elements=[];
    }

    addElement(brewery)
    {
        const element = {
            id: uniqid(), //generate a unique id
            brewery
        }
        this.elements.push(element);
        return element;
    }

    deleteElement(id)
    {
        //Find the index of the element
        const index = this.elements.findIndex(el => el.id === id);

        this.elements.splice(index,1);
    }
}