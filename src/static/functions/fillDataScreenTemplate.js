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
    const fieldValue = responseData[template.header.ref];
    const header = { ...template.header, fieldValue };
    return { cards: filledTemplate, header };
};
