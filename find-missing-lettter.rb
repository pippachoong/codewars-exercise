def find_missing_letter(input_array)
    alphabets = "abcdefghijklmnopqrstuvwxyz"

    is_upper_case = (input_array[0] === input_array[0].upcase)

    alphabet_array =  is_upper_case ? alphabets.upcase().split("") : alphabets.split('')

    first_alphabet = input_array[0]

    length_of_array = input_array.length + 1
    
    index_to_start = alphabet_array.index(first_alphabet)

    comparison_array = alphabet_array.slice(index_to_start, (index_to_start + length_of_array))
    
    i = 0 
    comparison_array.each do
        if comparison_array[i] != input_array[i]
           return comparison_array[i]
        end
      i += 1
    end
    

end