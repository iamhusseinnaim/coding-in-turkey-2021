
function del_item(){let elements = document.getElementsByClassName("del-button")

let index=0;

for(index;index<elements.length;index++){
    elements[index].addEventListener("click",function(e){
        e.preventDefault();
        if(confirm(` you'll delete the ${this.dataset.item} from the fridge  `)){
            let container = document.getElementById(this.dataset.container)
            container.remove()
            if(!document.getElementsByClassName("fridge-item").length){
                alert(' your fridge is empty now  ')
            }
        }
    })

}}

del_item()

let show_form_button = document.getElementById("show-add-item-form")
let form = document.getElementById("add-item-form")

show_form_button.addEventListener("click",function (e) {
    e.preventDefault();

    if(form.style.display == 'none'){
        form.style.display = 'block'
    }else{
        form.style.display='none'
    }

})


let insert_button = document.getElementById("insert-button");

insert_button.addEventListener("click",function (e) {
    e.preventDefault();
    let item_name = document.getElementById("name")
    let quantity = document.getElementById("quantity")

    if(quantity != '' & item_name != '' ){

        let container = document.getElementById('fridge-items-container')
        let id = document.getElementsByClassName("fridge-item").length+1
        let li_ele = document.createElement("li")
        li_ele.classList.add("fridge-item")
        li_ele.id = 'item-'+id.toString()
        let name = document.createElement("span");
        name.innerHTML = item_name.value
        let quantity_val = document.createElement("span")
        quantity_val.innerHTML = quantity.value
        let button = document.createElement("button")
        button.dataset.item = item_name.value
        button.dataset.container = 'item-'+id.toString()
        button.dataset.quantity = quantity
        button.innerHTML = ' delete '
        button.classList.add("del-button")


        li_ele.appendChild(name)
        li_ele.appendChild(quantity_val)
        li_ele.appendChild(button)
        container.appendChild(li_ele)
        del_item()
        item_name.value = ''
        quantity.value = ''

    }

})