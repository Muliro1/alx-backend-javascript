const fs = require('fs').promises;


/**
 * Read a file, count the number of students in each major
 * and print the results.
 *
 * @param {string} path - The path of the database file.
 *
 * @return {Promise<void>} A Promise that resolves when the
 *                         counting is done.
 */
function countStudents(path) {

  // Create a Promise that resolves when the counting is done.
  return new Promise((resolve, reject) => {

    // Read the file.
    fs.readFile(path, 'utf8')

      // If the file is read correctly:
      .then((data) => {

        // Split the data into lines.
        const lines = data.split('\n');

        // Create a hashtable to store the students.
        const hashtable = {};

        // Initialize the counter.
        let students = -1;

        // Loop through each line.
        for (const line of lines) {

          // Skip empty lines.
          if (line.trim() !== '') {

            // Split the line into columns.
            const columns = line.split(',');

            // Get the major and first name.
            const field = columns[3];
            const firstname = columns[0];

            // If this is not the first line:
            if (students >= 0) {

              // Check if the major exists in the hashtable.
              if (!Object.hasOwnProperty.call(hashtable, field)) {
                hashtable[field] = [];
              }

              // Add the student to the hashtable.
              hashtable[field] = [...hashtable[field], firstname];

            }

            // Increment the student counter.
            students += 1;

          }

        }

        // Print the number of students.
        console.log(`Number of students: ${students}`);

        // Print the number of students in each major.
        for (const key in hashtable) {
          if (Object.hasOwnProperty.call(hashtable, key)) {
            console.log(`Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}`);
          }
        }

        // Resolve the Promise.
        resolve();

      })

      // If there was an error reading the file.
      .catch(() => {

        // Reject the Promise.
        reject(new Error('Cannot load the database'));

      });

  });

}

// Export the function.
module.exports = countStudents;


module.exports = countStudents;
