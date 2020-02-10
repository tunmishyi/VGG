let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

let suffixes = ["th","st","nd","rd"]

let index;

for (index = 0; index < color.length; index++) {
    let text;
    let suffix;
    if (index == 0) {
        suffix = suffixes[1]
    } else if (index == 1) {
        suffix = suffixes[2]
    } else if (index == 2) {
        suffix = suffixes[3]
    } else {
        suffix = suffixes[0]
    }
    text = `${index + 1}${suffix} choice is ${color[index]}`;
    console.log(text);
}