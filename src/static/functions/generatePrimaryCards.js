export default (item, template) => {
    var newItem = {
        cards: template.cards.map(card => {
            //loop through each card in the template
            //return the entire contents of the template e.g. columns and title
            //but replace template variables with their respective values from the item
            var content = card.content.map(templateValue => {
                //loop through each value in the card
                //return the entire templatevalue including disabled
                //replace the template value with the appropriate value from the item
                //sets content to null if there is no data from the item
                //if all the values.content in card are set to null then the card won't be displayed
                return item[templateValue.title]
                    ? { ...templateValue, content: item[templateValue.title] }
                    : { ...templateValue, content: null };
            });
            return content ? { ...card, content: content } : null;
        })
    };
    //sets the header to match the template
    //but using the real item title as opposed to "name"
    newItem.header = {
        title: item[template.header.title],
        disabled: template.header.disabled
    };
    return newItem;
};
