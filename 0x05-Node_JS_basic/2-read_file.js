const fs = require('fs');

/**
 * Function to read a database file and count the number of students
 * in each major.
 *
 * @param {string} path - The path of the database file.
 */
function countStudents(path) {

  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // Read the file
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split('\n');

  // Create a hashtable to store the students
  const hashtable = {};

  // Initialize the counter
  let students = -1;

  // Loop through each line
  for (const line of lines) {

    // Skip empty lines
    if (line.trim() !== '') {

      // Split the line into columns
      const columns = line.split(',');

      // Get the major and first name
      const field = columns[3];
      const firstname = columns[0];

      // If this is not the first line
      if (students >= 0) {

        // Check if the major exists in the hashtable
        if (!Object.hasOwnProperty.call(hashtable, field)) {
          hashtable[field] = [];
        }

        // Add the student to the hashtable
        hashtable[field] = [...hashtable[field], firstname];
      }

      // Increment the student counter
      students += 1;
    }
  }

  // Log the total number of students
  console.log(`Number of students: ${students}`);

  // Log the number of students in each major
  for (const key in hashtable) {
    if (Object.hasOwnProperty.call(hashtable, key)) {
      console.log(`Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}`);
    }
  }
}


module.exports = countStudents;
