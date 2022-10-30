def rgb(r,g,b)
  
   "#{numberToHex(r)}#{numberToHex(g)}#{numberToHex(b)}"    
end

def numberToHex(number)
    array = "0123456789ABCDEF".split("")

    if number < 0 
        return "00"
    elsif number > 255
        return "FF"
    end 
    
    firstHexIndex = (number/16).floor
    firstHexValue = array[firstHexIndex]
    secondHexIndex = number % 16
    secondHexValue = array[secondHexIndex]
    
   "#{firstHexValue}#{secondHexValue}"
end