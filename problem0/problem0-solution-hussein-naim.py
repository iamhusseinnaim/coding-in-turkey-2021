
def whereIsMyFoor():
    fridge,item = input(' give me your fridge items to help you find what you looking for [split the items by "," ]  ') , input(' now i have your fridge , which item you want me to find it for you ?  ')
    was_found = None
    index = 0
    for item_in_fridge in fridge.split(','):

        if item_in_fridge == item:

            was_found = index

            break
        else:
            was_found = None

        index+=1

    if was_found:
        print(f'your {item} is in shelf {was_found}   ')
    else:
        print(f' oops your food does not found ! you need to fill up your fridge  ')



whereIsMyFoor()