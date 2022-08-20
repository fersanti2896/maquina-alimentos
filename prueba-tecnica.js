/* Desarrollado por José Fernando Nicolás Santiago */
(() => {
    let option   = prompt('MAQUINA DE ALIMENTOS\nElige el producto \nA: $270\nB: $340\nC: $390').toUpperCase();
    let price    = 0;
    let quantity = 0;
    let currency;
    let exchange;

    if ( option === 'A' || option === 'B' || option === 'C' ) {
        ( option === 'A' ) ? price = 270 
                          : ( option === 'B') ? price = 340
                          : price = 390

        while( quantity < price ) {
            currency = parseInt(prompt('Ingresa las monedas'));

            switch(currency) {
                case 10: 
                    quantity += 10;
                    break;
                case 50:
                    quantity += 50;
                    break;
                case 100:
                    quantity += 100;
                    break;
                default:
                    alert('¡Ingrese una moneda correcta!');
                    break;
            }

            alert(`Precio del producto: $${ price }`);
            alert(`Ingresado: $${ quantity }`);
        }

        if( quantity > price ) {
            exchange = quantity - price;

            while( exchange > 0 ) {
                if( exchange >= 50 ) {
                    alert('Su cambio: $50');
                    exchange -= 50;
                }

                if( exchange < 50 ) {
                    alert('Su cambio: $10');
                    exchange -= 10;
                }
            }
        }
    } else {
        alert('¡Ingrese un producto correcto!');
    }
})();