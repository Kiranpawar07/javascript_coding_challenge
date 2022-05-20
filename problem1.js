function findFirstUnique(arr) {
  var return_no = -1;
  var temp_array = new Array();

  for (i = 0; i < arr.length; i++) {
    var new_index = arr[i];
    if (temp_array[new_index] === undefined) {
      temp_array[new_index] = 1;
    } else {
      temp_array[new_index] += 1;
    }
  }
  for (j = 0; j < arr.length; j++) {
    if (temp_array[arr[j]] == 1) {
      return_no = arr[j];
      break;
    }
  }
  return return_no;
}


var arr = [9, 2, 3, 2, 6, 6];
document.write('Input :  [9,2,3,2,6,6] ');
document.write('<br>');
document.write('<br>');
document.write('Output :  ' + findFirstUnique(arr));
