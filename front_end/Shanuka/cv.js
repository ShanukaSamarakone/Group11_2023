function openCVGenerator() {
  var popupWidth = 900; // Adjust as needed
  var popupHeight = 700; // Adjust as needed
  var left = (window.screen.width - popupWidth) / 2;
  var top = (window.screen.height - popupHeight) / 2;
  var options = "width=" + popupWidth + ",height=" + popupHeight + ",left=" + left + ",top=" + top;
  var popupWindow = window.open("", "_blank", options);
  popupWindow.document.write(`
     
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

  fetch('http://localhost:8080/cv/addCV', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => {
      if (response.ok) {
          console.log('CV data saved successfully');
          document.getElementById('cvForm').reset(); // Optionally reset the form
      } else {
          console.error('Failed to save CV data:', response.status, response.statusText);
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}