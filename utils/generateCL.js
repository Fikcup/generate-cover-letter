const moment = require('moment');

// maps input into text format
const generate = (responseData) => {
    return `
    ${responseData.yourname}
    ${responseData.yourzipcode}
    ${responseData.yournumber}
    ${responseData.youremail}

    ${moment().format('MMMM Do[,] YYYY')}

    To Whom It May Concern,

    This letter is to express my interest in your posting for the ${responseData.jobtitle} position available at ${responseData.companyname}. I have experience with ${responseData.tech}. I am confident that I can use these skills at ${responseData.companyname}.

    I enjoy challenging projects that expand my current skill set and knowledge base. In terms of working in a team setting, I have experience with scrum and agile methodologies.

    Your qualifications closely match my skillset and experience. In fact, this cover letter was created using some of the tech you outline in your job description!

    I've attached a copy of my resume that details my background and previous experience. Additionally you can view my GitHub here: https://github.com/${responseData.github} and my portfolio here: ${responseData.portfolio}.

    Thank you for your time and consideration. I look forward to speaking with you about this opportunity.

    Sincerely,

    ${responseData.yourname}
    `;
}

module.exports = generate;