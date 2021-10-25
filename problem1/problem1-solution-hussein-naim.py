

# this example is return the value depending on the inputs you give to the function

# False
ingredients = ['tomato', 'onion', 'lettuce']
fridge = ['tomato', 'banana', 'apple', 'onion', 'cucumber']

# True
ingredients = ['olives', 'onion', 'lettuce']
fridge = ['onion', 'banana', 'lettuce', 'olives']



def validateRecipe(fridge,ingredients):
    

    result = []


    for item in ingredients:
        if item in fridge:
            result.append(True)
        else:
            result.append(False)
    
    print('\n')
    print(False not in result )


validateRecipe(fridge, ingredients)
