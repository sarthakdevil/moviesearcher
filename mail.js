var mail;
function sendMail() {
  const fetchData = async () => {
    const url = 'https://temp-mail70.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5338a4507fmshb5163feae945a1bp1d1de6jsn08f5e313c8a0',
        'X-RapidAPI-Host': 'temp-mail70.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      mail = result.email;
      var recivemail = document.getElementById('email').value;
      if (recivemail === '') {
        console.log("Please enter your email");
        return;
      }
      Email.send({
        Host: "smtp.gmail.com",
        Username: `${mail}`,
        Password: "Enter your password",
        To: `${recivemail}`,
        From: `${mail}`,
        Subject: "Hello!!",
        Body: "Welcome to sarkx entertainment",
      }).then(function (message) {
        alert("Mail sent successfully");
      });
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}

// Call the sendMail function
sendMail();
