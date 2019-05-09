const {createExercise} = require('./exercise');

function generateExerciseFiles(exerciseName, {fs, print, path}) {
  const exercisePath = path.join(__dirname, '../../exercises', exerciseName);
  const exercise = createExercise(exerciseName);

  return fs
    .pathExists(exercisePath)
    .then((exerciseDirExists) => {
      if (exerciseDirExists) {
        print('An exercise with that name already exists. No files created.');
        process.exit(0);
        return;
      }
      print('Generating exercise files...');
      return fs.mkdir(exercisePath);
    })
    .then(() =>
      Promise.all([
        fs.writeFile(path.join(exercisePath, 'index.js'), exercise.sourceCode),
        fs.writeFile(path.join(exercisePath, 'test.js'), exercise.testCode),
      ])
    )
    .then(() => {
      print(`Exercise files created at ${exercisePath}.`);
    })
    .catch((err) => {
      print(
        `An error occurred attempting to create files. Error message: ${
          err.message
        }`
      );
    });
}
module.exports = generateExerciseFiles;
