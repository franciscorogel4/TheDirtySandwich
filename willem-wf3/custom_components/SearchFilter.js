import React from 'react';

export function createFilteredArray(filterText, rawArray){

  var filteredArray = [];
  var filterTextRegEx = new RegExp(filterText, 'i');
  var regExArray = [filterTextRegEx];

  if(filterText == ''){
    return rawArray;
  }

  for(var cellData of rawArray){
    if(cellData.title.toLowerCase().match(filterTextRegEx) || cellData.description.toLowerCase().match(filterTextRegEx)){
      filteredArray.push(cellData);
    }
  }
  return filteredArray;
}
