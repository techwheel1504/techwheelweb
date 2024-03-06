function sendMail() {
    var params = {
      sendername: document.getElementById("name").value,
      senderemail: document.getElementById("email").value,
      sendercontactno: document.getElementById("contactno").value,
      sendersubject: document.getElementById("subject").value,
      sendermessage: document.getElementById("message").value,
    };
  
    const serviceID = "service_jq6zr47";
    const templateID = "template_htef0tc";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("contactno").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          
          alert("Hi, Your message has sent successfully!!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
  