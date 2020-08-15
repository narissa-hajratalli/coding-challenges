# Reference: https://www.youtube.com/watch?v=n_lvik2UYZg&list=PLY6oTPmKnKbZp8Kh6jS5A6j-6H2kGY12e&index=9&t=0s
# Class is just a way that we construct an object in OOP

#creating the definition of a dog
class Dog
  #### CLASS VARIABLES ####
  @@totalDogs = 0 #These are specific to the class

  #### CONSTRUCTOR - always the initialize function ###
  def initialize(name)
    #Defining instance variables
    #To access these variables outside of the class, we need to define getters and setters
    @name = name #Takes what we put into the name parameter
    @legs = 4
    @ears = 2
    @tail = true
    @@totalDogs += 1
  end

  ##### METHODS #####

  #getter - read
  def legs
    @legs
  end

  #setters - write
  def set_legs(value)
    @legs = value
  end
  def name
    @name
  end


  #Class function -- this will return total dogs
  def Dog.total
    @@totalDogs
  end

  def Dog.stuff(my_arg)
    puts my_arg
  end

end


# Inheritance
class Small_Dog < Dog
  stuff :a_thing
  # We are just passing symbols in new methods that were pre-defined in the parent class
end

Dog1 = Small_Dog.new("Spot") #Creates a new object (aka an instance) called 'Spot'. It's data type will be Dog.
Dog2 = Small_Dog.new("Fluffy")

Dog2.set_legs(3) #Changes the amount of legs

# We can make multiple dogs
puts Dog1.name
puts Dog2.name
puts Dog.total
