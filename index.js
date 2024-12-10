// Variable holding the email body and text content with <br> for new lines
const emailContentTemplate = `Dear Governor Shapiro,

I hope this message finds you well. I am writing to respectfully request your consideration in pardoning Luigi Mangione, a young man whose actions, though tragic, were driven by a profound frustration with the systemic injustices of capitalism.

Luigi Mangione's upbringing in a privileged environment exposed him to the stark realities of wealth inequality, which he courageously criticized in his manifesto. His act of violence—targeting a corporate executive—was not one born of malice, but rather an act of protest against a system that prioritizes profit over people’s well-being. Mangione is a bright, thoughtful individual, whose actions, though extreme, highlight a significant need for societal reform.

In his manifesto, Mangione clearly articulated his belief that the true crime lies within the very structure of capitalism. By targeting a corporate CEO, Mangione sought to expose the damaging effects of a system that consolidates power and wealth in the hands of a few, often at the expense of the most vulnerable in society. His critique of corporate greed and the inequities within the healthcare system are issues that resonate with many, as the system often benefits corporations over the general public.

Furthermore, Mangione’s educational background underscores his intellectual capacity to critically engage with these issues. A former student at institutions like Stanford and Penn, Mangione demonstrated leadership, innovative thinking, and a passion for interdisciplinary work—especially as he founded the UPGRADE club, which brought together diverse minds for collaborative game development projects. His ability to analyze systems, question authority, and inspire change has been clear throughout his academic and professional journey.

I urge you to consider the broader implications of his actions—not just as an isolated incident, but as a reflection of systemic issues within our economic framework. Pardon Mangione, not only for his actions, but for the message that those actions bring forward about the flaws inherent in capitalism itself. This could be a moment to address the underlying problem—capitalism—and take a step towards building a more compassionate, equitable society that values people over profits.

Thank you for your time and consideration. I sincerely hope you will act in the spirit of justice and reform.`;

function copy() {
    navigator.clipboard.writeText(emailContentTemplate);
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Function to update email content based on user input
function updateEmailContent() {
    

    // Update the email content on the page
    // document.getElementById("emailContent").innerHTML = emailContent;

    // Create the mailto link dynamically
    // const emailLink = `mailto:?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailContent.replace(/<br>/g, '\n'))}`;
    // document.getElementById("sendEmailButton").href = emailLink;
}

// Event listener to update the email content when inputs change
// fullNameInput.addEventListener('input', updateEmailContent);
// // contactInfoInput.addEventListener('input', updateEmailContent);
// addressInput.addEventListener('input', updateEmailContent);
// emailAddressInput.addEventListener('input', updateEmailContent);

// Initial update of email content
updateEmailContent();
