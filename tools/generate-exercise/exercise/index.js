const {createExercise} = require('./exercise');
const {functionName} = require('./function-name');

module.exports = {
  createExercise: (name) => createExercise(name, functionName(name)),
};
