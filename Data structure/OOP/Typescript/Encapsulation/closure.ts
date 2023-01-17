const student = function () {
  var studentNAme = 'Meysam Kiani'
  var expressionsValidName = new RegExp(/\d+/);

  return {
    setName: (enteredName: string) => {
      if (expressionsValidName.test(enteredName)) {
        console.log('Invalid Name Is Entered!')
      } else {
        studentNAme = enteredName
        return 'OK!'
      }
    },

    getName: (): string => {
      return studentNAme
    }
  }
}();


console.log('Use getName method:', student.getName());

setTimeout(() => {
  console.log('Use setName method:', student.setName('Alexander lech'))
  console.log('Use getName method:', student.getName());
}, 300);