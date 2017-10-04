import React from 'react';

export function createFilteredArray(filterText, rawArray){

  var filteredArray = [];

  if(filterText == ''){
    return rawArray;
  }

  for (var cellData of rawArray){
    if(cellData.title.toLowerCase() == filterText || cellData.description.toLowerCase() == filterText){
      filteredArray.push(cellData);
    }
  }
  return filteredArray;
}
