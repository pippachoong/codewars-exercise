def solution(number)
    if number < 0 
        return 0
    end 

    currentNumber = 0
    sum = 0

    while currentNumber < number 
        if currentNumber % 3 == 0 || currentNumber % 5 == 0
            sum += currentNumber
        end
    currentNumber+=1
    end

    return sum

end