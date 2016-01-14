function bubbleSort(arrToSort) {
    var counter = arrToSort.length;
    while(counter > 0) {
        for (var i = 0; i < counter-1; i++) {
            if(typeof arrToSort[i] === 'number' && typeof arrToSort[i+1] === 'number'){
                if (arrToSort[i] > arrToSort[i+1]) {
                    var temp = arrToSort[i];
                    arrToSort[i] = arrToSort[i+1];
                    arrToSort[i+1] = temp;
                }
            } else {
                throw new TypeError('no');
                // return "Error"
            }
        }
        counter--;
    }

    return arrToSort;

};