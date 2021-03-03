function editInt(int) {
    let split = int.split(0);
    let length = split.length - 1;
    let newArr = []
    for (let i = 0; i <= length; i++) {

        let hasil = split[i].split('')
            .sort()
            .join('');
        newArr.push(hasil)

    } return newArr.join('')
}
console.log(editInt("5956560159466056"))