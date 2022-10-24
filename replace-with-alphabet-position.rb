def alphabet_position(text)
    alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    # p alphabet

    splittedText = text.downcase.split('')
    # p splittedText

    
    filteredText = splittedText.select{|char| alphabet.include?(char)}

    # p "filteredText"
    # p filteredText

    numberedText = filteredText.map{|char| alphabet.index(char)+1}
    # p numberedText

    result = numberedText.join(' ')

end