using System;
using System.Windows.Forms;

namespace 
{
    public partial class YourForm : Form
    {
        private CVService _cvService;

        public YourForm()
        {
            InitializeComponent();
            // Initialize CVService
            _cvService = new CVService();
        }

        private async void SubmitButton_Click(object sender, EventArgs e)
        {
            // Retrieve form data
            string name = nameTextBox.Text;
            string dob = dobTextBox.Text;
            string address = addressTextBox.Text;
            string skills = skillsTextBox.Text;
            string experience = experienceTextBox.Text;

            // Create CV object
            CV cv = new CV
            {
                Name = name,
                DOB = dob,
                Address = address,
                Skills = skills,
                Experience = experience
            };

            // Submit CV data
            bool success = await _cvService.SubmitCVAsync(cv);
            if (success)
            {
                MessageBox.Show("CV data submitted successfully!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                ClearForm(); // Optionally clear form fields after successful submission
            }
            else
            {
                MessageBox.Show("Failed to submit CV data. Please try again later.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void ClearForm()
        {
            // Clear form fields
            nameTextBox.Text = string.Empty;
            dobTextBox.Text = string.Empty;
            addressTextBox.Text = string.Empty;
            skillsTextBox.Text = string.Empty;
            experienceTextBox.Text = string.Empty;
        }
    }
}