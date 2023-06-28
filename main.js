
const section = document.querySelector('section');
const precio = document.querySelector('.precio');
const carritoIcon = document.querySelector('.miCarritoIcon');
const cantidad_productos_carrito = document.querySelector('.number_carrito');
const cantidad_productos_final = document.querySelector('.cantidad_productos_total')
const precio_final = document.querySelector('.precio_final_numero');
const div_ventana_mi_carrito = document.querySelector('.ventana_mi_carrito'); //Mando a llamar al elemento padre del clonde la ventana carrito




// clonacion de html a js

const product_list = [];
product_list.push({
    name:'Goku Figura',
    precio:9500,
    img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/383/299/products/413c018d-2c93-481a-a774-a471732b1e961-be4bbe3a5b13e1289516771202404828-640-0.jpeg',
    id:0,
})
product_list.push({
    name:'Zoro Figura',
    precio:6900,
    img:'https://m.media-amazon.com/images/I/61cBV1v26jL._AC_SL1002_.jpg',
    id:1,
})
product_list.push({
    name:'Uraraka Figura',
    precio:8000,
    img:'https://cdn.shopify.com/s/files/1/0269/4617/5010/products/FiguraOchakoUrarakaUravityMyHeroAcademiaTheAmazingHeroesVol32_6_1200x.webp?v=1671790207',
    id:2,
})
product_list.push({
    name:'Tomioka FunkoPop',
    precio:9000,
    img:'https://http2.mlstatic.com/D_NQ_NP_851896-MLA49761301202_042022-O.webp',
    id:3,
})
product_list.push({
    name:'Chopper Figura',
    precio:4600,
    img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/037/558/products/anime-heroes-one-piece-tony-tony-chopper-031-6d50f98937f2917e7116843379725385-640-0.webp',
    id:4,
})


let cantidad = 0

let precio_final_compra = 0
for (product of product_list){
    
    const button_discount = document.createElement('button');
    button_discount.classList.add('discount_button');
    button_discount.setAttribute('id', product.id);
    button_discount.innerText = 'Cupon de descuento';




    const img_carrito = document.createElement('img');
    img_carrito.classList.add('agregar_carrito');
    img_carrito.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png')

    
    const h1_precio = document.createElement('h1');
    h1_precio.classList.add('precio');
    h1_precio.innerText = '$' + product.precio;
    
    const p_name_product = document.createElement('p');
    p_name_product.classList.add('name_product');
    p_name_product.innerText =  product.name;
    
    const div_info_text = document.createElement('div');
    div_info_text.classList.add('info_text');
    
    const img_product = document.createElement('img');
    img_product.classList.add('img_product');
    img_product.setAttribute('src', product.img);
    
    const div_producto = document.createElement('div');
    div_producto.classList.add('producto')
    
    
    div_info_text.append(p_name_product,h1_precio,img_carrito);
    
    div_producto.append(img_product,div_info_text);
    
    section.appendChild(div_producto);




    // funcionalidades

    img_carrito.addEventListener('click', sumarNumCarrito);
    
    // const IdsAcumulados = [];

    function sumarNumCarrito(){
        
        // for (item of IdsAcumulados){
        //     if (product_list[button_discount.id].id == item.id){
        //         console.log('El producto ya está en la lista');
        //     }else{
        //         console.log('Nashe')
        //     }

        // }

        cantidad = cantidad +1
        cantidad_productos_carrito.innerText = cantidad; //Numero del icono del carrito
        
        cantidad_productos_final.innerText = cantidad + ' Productos' //Numero de la ventana carrito

        precio_final_compra = precio_final_compra + product_list[button_discount.id].precio
        precio_final.innerText = '$' +  precio_final_compra

        // console.log(button_discount.id)
        // console.log(product_list[button_discount.id].name) 

        //Clonando elementos de la ventana carrito

        div_ventana_mi_carrito.classList.add('ventana_mi_carrito');



        const div_miCarrito_producto = document.createElement('section');
        div_miCarrito_producto.classList.add('miCarrito_producto');



        const miCarrito_imgProducto = document.createElement('img');
        miCarrito_imgProducto.classList.add('miCarrito_imagenProducto');     
        miCarrito_imgProducto.setAttribute('src', product_list[button_discount.id].img);


        const miCarrito_nameProducto = document.createElement('p');
        miCarrito_nameProducto.classList.add('miCarrito_nameProducto');    
        miCarrito_nameProducto.innerText = product_list[button_discount.id].name
        

        const miCarrito_precioProducto = document.createElement('p');
        miCarrito_precioProducto.classList.add('miCarrito_precioProducto');
        miCarrito_precioProducto.innerText = 'Unitario: $' + product_list[button_discount.id].precio


        const delete_product_icon = document.createElement('img');
        delete_product_icon.classList.add('delete_product');
        delete_product_icon.setAttribute('src', 'https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png');

        const acumlarItem = document.createElement('p');
        acumlarItem.classList.add('acumularItemNum');
        


        div_miCarrito_producto.append(miCarrito_imgProducto,miCarrito_nameProducto,miCarrito_precioProducto,delete_product_icon,acumlarItem);

        div_ventana_mi_carrito.appendChild(div_miCarrito_producto);

        delete_product_icon.addEventListener('click', deleteItem);



        function deleteItem(){ //Icono para borrar item
            div_miCarrito_producto.remove()

            //Cantidad carrito de compras icono
            cantidad = cantidad -1
            cantidad_productos_carrito.innerText = cantidad

            //Cantidad carrito de compras ventana
            cantidad_productos_final.innerText = cantidad + ' Productos'

            //Reduccion del precio final
            precio_final_compra = precio_final_compra - product_list[button_discount.id].precio
            // console.log(precio_final_compra)
            
            precio_final.innerText = '$' + precio_final_compra

            
            
        }

    }    



}

carritoIcon.addEventListener('click', mostrarVentanaCarrito)

function mostrarVentanaCarrito(){
    if (div_ventana_mi_carrito.style.display === 'none') {
        div_ventana_mi_carrito.style.display = 'block';
      } else {
        div_ventana_mi_carrito.style.display = 'none';
      }
}


// Cupones:

// const cupones = [];

// cupones.push({
//     name: 'manzana',
//     discount:40,
//     uses:3,
// })





