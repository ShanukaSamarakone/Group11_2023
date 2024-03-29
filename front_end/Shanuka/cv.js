function openCVGenerator() {
    var popupWidth = 900; 
    var popupHeight = 700; 
    var left = (window.screen.width - popupWidth) / 2;
    var top = (window.screen.height - popupHeight) / 2;
    var options = "width=" + popupWidth + ",height=" + popupHeight + ",left=" + left + ",top=" + top;
    var popupWindow = window.open("", "_blank", options);
    popupWindow.document.write(`
        <html>
        <head>
            <title>CV Generator</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-image: url('Images/background.jpeg');
                    background-size: cover;
                    background-position: center;
                }
                .container {
                    width: 90%;
                    height: 75%;
                    max-width: 700px;
                    background-color: rgba(255, 255, 255, 0.9); /* Add a semi-transparent white background */
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a shadow effect */
                }
  
                h2{
                    font-size: 2.2rem;
                    color: #00e77f;
                }
  
                form {
                    width: 100%;
                }
  
                form label,
                form input,
                form textarea {
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2><center>Let's Begin</center></h2>
                <form id="cvForm" onsubmit="generateCV(event)">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" required><br>
                    <label for="dob">DOB:</label><br>
                    <input type="date" id="dob" name="dob" required><br>
                    <label for="address">Address:</label><br>
                    <input type="text" id="address" name="address" required><br>
                    <label for="skills">Skills:</label><br>
                    <textarea id="skills" name="skills" rows="4" cols="50" required></textarea><br>
                    <label for="experience">Experience:</label><br>
                    <textarea id="experience" name="experience" rows="4" cols="50" required></textarea><br><br>
                    <input type="submit" value="Generate">
                </form>
                <div id="cvOutput"></div>
            </div>
        </body>
        </html>
    `);
  }
  
function generateCV(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  var name = document.getElementById('name').value;
  var dob = document.getElementById('dob').value;
  var address = document.getElementById('address').value;
  var skills = document.getElementById('skills').value;
  var experience = document.getElementById('experience').value;

  // Generate CV HTML
  var cvHtml = `
      <h2>Generated CV</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>DOB:</strong> ${dob}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Skills:</strong></p>
      <p>${skills}</p>
      <p><strong>Experience:</strong></p>
      <p>${experience}</p>
  `;

  // Display CV below the form
  var cvOutput = document.getElementById('cvOutput');
  cvOutput.innerHTML = cvHtml;

  // Send form data to backend
  var formData = {
      name: name,
      dob: dob,
      address: address,
      skills: skills,
      experience: experience
  };

  axios.post('http://localhost:8080/cv/addCV', formData)
    .then(response => {
      console.log('CV data saved successfully');
      document.getElementById('cvForm').reset(); // Optionally reset the form
    })
    .catch(error => {
      console.error('Error:', error);
    });
}