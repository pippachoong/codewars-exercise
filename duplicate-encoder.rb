def duplicate_encode(word)

    array = word.downcase.split("")

    anyDuplicates = {}

    array.each {|str| 
        if anyDuplicates[str] != nil
            anyDuplicates[str] = ")"
        else 
            anyDuplicates[str] = "("
        end
    }
    output = array.map{ |char| anyDuplicates[char]}.join("")

    output
end