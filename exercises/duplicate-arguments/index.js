/*
  Returns true if duplicate values exist in arguments.

  */
 // Best solution is to use Set (allows args to be any type)
 function duplicateArguments(...args) {
   return new Set(args).size !== args.length;
 }

//  Arguments must be values, not references. (no objects, arrays, etc.)
// function duplicateArguments(...args) {
//   const argSet = {};
//   for (let item of args) {
//     if (argSet[item]) return true;
//     argSet[item] = 1;
//   }
//   return false;
// }


module.exports = {duplicateArguments};
