export function createRectanglePattern(rows, col, chsar) {
  for (let i = 0; i < rows; i++) {
    let r = ''; // string goes in downward
    for (let j = 0; j < col; j++) {
      r = r + chsar; //string+string for i=0 add mul string in
    }
    console.log(r); //i=0,1,2,3
  }
}
//console.log('>>>>>>>>>>>>' + '*' + '*' + '*');

export function rightagletrianglePattern(r) {
  for (let i = 0; i < r; i++) {
    let res = '';
    for (let j = 0; j < i; j++) {
      res = res + '*';
    }
    console.log(res);
  }
}
//in this we declare the let inside the for loop of i so for every loop the row gets updated to empty as we assigned to ''

export function rightagletrianglePatternALT(r) {
  let row = '';
  for (let i = 0; i < r; i++) {
    row = row + '* ';
    console.log(row);
  }
}

export function RightAngledNumberPyramid(r) {
  for (let i = 1; i <= r; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row = row + j + ' ';
    }
    console.log('row>>>>>>>', row);
  }
}

export function RightAngledNumberPyramidALT(r) {
  let row = '';
  for (let i = 1; i <= r; i++) {
    row = row + i + ' ';
    console.log('row>>>>>>>', row);
  }
}

export function RightangleTrinangleNumberPyramid_numberRepeat(r) {
  for (let i = 1; i <= r; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row = row + i + '';
    }
    console.log('row>>>>>>>', row);
  }
}

export function Inverted_Right_Pyramid(r) {
  for (let i = r; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row = row + '*' + ' ';
    }
    console.log(row);
  }
}

export function Inverted_Right_Pyramid_numbers(r) {
  for (let i = r; i >= 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row = row + j + ' ';
    }
    console.log(row);
  }
}
