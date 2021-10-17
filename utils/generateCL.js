const moment = require('moment');

const generate = (responseData) => {
    return `
    ${responseData.yourname}
    ${responseData.yourzipcode}
    ${responseData.yournumber}
    ${responseData.youremail}

    ${moment().format('MMMM Do[,] YYYY')}
    `;
}

module.exports = generate;