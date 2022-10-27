def high_and_low(numbers)
  
    # for ruby to sort numbers .sort_by(&:to_i)
    array = numbers.split(" ").sort_by(&:to_i)

    highest_number = array[array.length-1]
    lowest_number = array[0]

    output = "#{highest_number} #{lowest_number}"

    output

#     a = numbers.split.map(&:to_i).sort
#   "#{a.last} #{a.first}"
end