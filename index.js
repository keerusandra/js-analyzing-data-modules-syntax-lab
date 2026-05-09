
require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays
  for (const arr of args) {
    combinedObject.users = [
      ...combinedObject.users,
      ...arr
    ];
  }

  // Add today's date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Return object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};