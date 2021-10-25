

#  False
ingredients = {'tomato': 1, 'onion': 2}
fridge = {'tomato': 1, 'onion': 1}

# True
ingredients = {'tomato': 2, 'onion': 3}
fridge = {'tomato': 2, 'onion': 3, 'olives': 1}


def validateRecipeWithQuantity(fridge, ingredients):
    
    result = []

    for item,quantity in ingredients.items():
        if fridge[item] >= quantity:
            result.append(True)
        else:
            result.append(False)

    print(False not in result)


validateRecipeWithQuantity(fridge, ingredients)
