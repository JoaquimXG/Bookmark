export default (responseData, template) => {
    var filledTemplate = template.cards.map(card => {
        return {
            ...card,
            fields: card.fields.map(field => ({
                ...field,
                fieldValue: responseData[field.ref]
            }))
        };
    });
    const title = responseData[template.header.title];
    const header = { ...template.header, title };
    return { cards: filledTemplate, header };
};
