let result = Number(window.localStorage.getItem("result"));
document.getElementById("result").innerText = result;
document.getElementById("trees").innerText = (result * 35).toFixed() + " " + document.getElementById("trees").innerText;

function sendEmail() {
    let emailId = document.getElementById("mail").value;
    let name = document.getElementById("name").value;

    let textContainer = 'Your Annual Carbon Emission is' + result + ' Tons';  // The element with the text.

    // Create a canvas object.

    let canvas = document.createElement("canvas");
    canvas.height = 300;
    canvas.width = 600;

    let ctx = canvas.getContext("2d"); // Create canvas context. 
    ctx.fillStyle = "#276221";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "20px sans-serif";
    ctx.fillText("Dear " + name, 20, 50);

    ctx.fillStyle = "white";
    ctx.font = "20px sans-serif";
    ctx.fillText("Your Annual Carbon Emission is", 20, 80);

    ctx.fillStyle = "white";
    ctx.font = "bold 30px sans-serif";
    ctx.fillText(result + " Tons CO₂e", 20, 120);

    ctx.fillStyle = "white";
    ctx.font = "20px sans-serif";
    ctx.fillText("To offset this carbon emission", 20, 150);

    ctx.fillStyle = "white";
    ctx.font = "bold 30px sans-serif";
    ctx.fillText("You may plant " + (result * 35).toFixed() + " trees", 20, 190);

    let uri = canvas.toDataURL('image/jpeg');

    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "saurav@gmail.com",
        Password: "***********************",
        To: emailId,
        From: "saurav223019@gmail.com",
        Subject: "Annual CO2 Emission Report",
        Body: "Kindly find your Carbon Emission Report attached.",
        Attachments: [
            {
                name: "report.jpg", // The name you want for the attached image
                data: uri.split(',')[1],
                mimetype: 'image/jpeg'
            }
        ]
    }).then(function (message) {
        alert("Email successfully sent");
    });
}

