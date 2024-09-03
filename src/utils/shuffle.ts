function shuffle(arr: any = []) {
    let i: number = arr.length;
    let random: number;

    while(i > 0) {
        random = Math.floor(Math.random() * i--);

        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    
    return arr;
}

export default shuffle;