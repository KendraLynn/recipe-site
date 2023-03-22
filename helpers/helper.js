Handlebars.registerHelper('toArray', function (obj) {
    var result = [];
    for (var key in obj) {
        result.push({ key: key, value: obj[key] });
    }
    return result;
});