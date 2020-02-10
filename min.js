
// method 1
function min_value_1(val_1, val_2) {
    return Math.min(val_1, val_2);
}

// method 2
function min_value_2(val_1, val_2) {
    if (val_1 < val_2){
        return val_1;
    } else if (val_2 < val_1){
        return val_2;
    }
}