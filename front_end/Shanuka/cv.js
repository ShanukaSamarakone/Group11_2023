function generateCV(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var formData = {
      name: document.getElementById('name').value,
      dob: document.getElementById('dob').value,
      address: document.getElementById('address').value,
      skills: document.getElementById('skills').value,
      experience: document.getElementById('experience').value
    };
  
    // Send POST request to backend
    fetch('http://localhost:8080/cv/addCV', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Data saved successfully
        console.log('CV data saved successfully');
        // Optionally, reset the form
        document.getElementById('cvForm').reset();
      } else {
        // Handle errors
        console.error('Failed to save CV data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  