function sendMail (contactForm){
    emailjs.send("gmail","rosie", {
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "customer_question":contactForm.textarea.value,
    })
    .then(
        function(response){
            console.log("success",response);
        },
        function(error){
            console.log("failed", error)
        });
}