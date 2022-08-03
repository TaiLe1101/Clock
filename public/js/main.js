const students = [
  {
    id: 1,
    firstName: 'Lê Trần Tấn',
    lastName: 'Tài',
    birthDay: '12/01/2003',
    isStudent: true,
  },
  {
    id: 2,
    firstName: 'Lê Trần Tấn',
    lastName: 'Tài',
    birthDay: '11/01/2003',
    isStudent: false,
  },
  {
    id: 3,
    firstName: 'Lê Trần Tấn',
    lastName: 'Tài',
    birthDay: '11/01/2003',
    isStudent: false,
  },
];
// Hàm forEach2
Array.prototype.forEach2 = function (callBack) {
  if (typeof callBack === 'function') {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        callBack(this[index], index, this);
      }
    }
  }
};

//Hàm filter
Array.prototype.myFilter = function (callBack) {
  if (typeof callBack === 'function') {
    let arr = [];
    let index = 0;
    for (var i in this) {
      if (this.hasOwnProperty(i)) {
        let result = callBack(this[i], i, this);
        if (result) {
          arr.push(this[i]);
        }
      }
    }
    return arr.length == 1 ? this[index] : arr;
  }
};

const taile = students.myFilter((student) => {
  return student.isStudent == true;
});

console.log(taile);
// isStudent.forEach2((student) => {
//   console.log(student);
// });
