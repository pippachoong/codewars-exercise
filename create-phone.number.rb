def create_phone_number(numbers)
    part_one = numbers.slice(0, 3).join("")
    # p part_one
    part_two = numbers.slice(3, 3).join("")
    # p part_two
    part_three = numbers.slice(6,4).join("")
    # p part_three
    combined_numbers = "(#{part_one}) #{part_two}-#{part_three}"
    combined_numbers
end