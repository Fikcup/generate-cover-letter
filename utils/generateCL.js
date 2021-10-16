const generate = (responseData) => {
    return `${responseData.yourname}
    ${responseData.yourzipcode}
    ${responseData.yournumber}
    ${responseData.youremail}
    `;
}

module.exports = generate;