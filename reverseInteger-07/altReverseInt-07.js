let reverseInt = (num) => {
    let sign = 1
    let answer = 0
    let limit = 2 ** 31 //2147483648

    if (num < 0) {
        sign = -1
    }
    
    let absoluteNum = Math.abs(num)
    
    while(absoluteNum > 0) {
        answer = answer * 10 + (absoluteNum % 10)
        absoluteNum = Math.floor(absoluteNum / 10)
    }
    return answer > limit? 0 : answer * sign
}

