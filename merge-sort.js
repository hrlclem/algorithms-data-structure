function mergeSortArray(array){
    if (array.length <=1){
      return array;
    }
    const midPoint = Math.floor(array.length/2);
  
    const leftArr = array.slice(0, midPoint);
    const rightArr = array.slice(midPoint);
  
    return mergeTwo(mergeSortArray(leftArr), mergeSortArray(rightArr));
  }
  
  function mergeTwo(leftArr, rightArr){
    let resultArr = [];
  
    let leftIndex = 0;
    let rightIndex = 0;
  
  while(leftIndex<leftArr.length && rightIndex < rightArr.length){
    if(leftArr[leftIndex] < rightArr[rightIndex]){
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    }else{
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  
    if(leftArr[leftIndex]){
      var unadded = leftArr.slice(leftIndex);
      resultArr = resultArr.concat(unadded);
    } else{
      unadded = rightArr.slice(rightIndex);
      resultArr = resultArr.concat(unadded);
    }
    console.log(resultArr);
    return resultArr;
  }

  
  mergeSortArray([5,3,4,1,6,2,7]);