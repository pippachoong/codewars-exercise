def solution(str)

    str_array = str.split("")
    output = []

    if str_array.length % 2 === 1
        str_array.push("_")
    end

    while str_array.length >= 2
        pair_string = str_array.slice!(0,2).join("") # grad first 2 elements
        output.push(pair_string)
    end

    return output



end