const products = [
    {
        id: '1',
        name: 'Procesador Intel Core i5-10400F BX8070110400F de 6 núcleos y 4.3GHz de frecuencia',
        category: 'Procesadores',
        marca: 'Intel',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_842077-MLA45376249655_032021-F.webp",
        stock: '30',
        description: 'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos',
        price: '200',

    },
    {
        id: '2',
        name: 'Procesador gamer AMD Ryzen 5 3600 100-100000031BOX de 6 núcleos y 4.2GHz de frecuencia',
        category: 'Procesadores',
        marca: 'Ryzen',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_804739-MLA45376476889_032021-F.webp',
        stock: '12',
        description: 'Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        price: '335',
    },
    {
        id: '3',
        name: 'Procesador gamer Intel Core i7-10700K BX8070110700K de 8 núcleos y 5.1GHz de frecuencia con gráfica integrada',
        category: 'Procesadores',
        marca: 'Intel',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_957276-MLA45376579781_032021-F.webp',
        stock: '32',
        description: 'Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.',
        price: '559',
    },
    {
        id: '4',
        name: 'Procesador Intel Core I9-12900K BX8071512900K de 16 núcleos y 5.2GHz',
        category: 'Procesadores',
        marca: 'Intel',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_841035-MLA48536274125_122021-F.webp',
        stock: '9',
        description: 'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.',
        price: '1004',
    },
    {
        id: '5',
        name: 'Procesador gamer Intel Core i7-9700K BX80684I79700K de 8 núcleos y 4.9GHz',
        category: 'Procesadores',
        marca: 'Intel',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_601081-MLA45377368163_032021-F.webp',
        stock: '23',
        description: 'Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        price: '516',
    },
    {
        id: '6',
        name: 'Placa de video Nvidia Gigabyte GeForce GTX 16 Series GTX 1660 GV-N1660OC-6GD OC Edition 6GB',
        category: 'TarjetaGrafica',
        marca: 'Gigabyte',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_637673-MLA45732550390_042021-F.webp',
        stock: '5',
        description: 'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.',
        price: '871',
    },
    {
        id: '7',
        name: 'Tarjeta Gráfica Asus Dual Radeon Rx 6500 Xt Oc 4gb Gddr6',
        category: 'TarjetaGrafica',
        marca: 'Asus',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_764675-MLU49972467346_052022-F.webp',
        stock: '7',
        description: 'ASUS Dual Radeon™ RX 6500 XT OC Edition 4GB GDDR6. Resumen: -Los ventiladores Axial-Tech presentan unas aspas más largas y un anillo de bloqueo que incrementa la presión de aire hacia abajo. -El diseño de 2 ranuras permite que se enfríe de forma eficiente y potencia su compatibilidad con chasis de pequeño formato. -Los ventiladores con doble rodamiento de bolas duran el doble. -La tecnología Auto-Extreme potencia la fiabilidad automatizando el proceso de manufactura. -La placa de protección protege los componentes durante el transporte y la instalación.',
        price: '592',
    },
    {
        id: '8',
        name: 'Notebook gamer MSI Thin GF63 negra 15.6", Intel Core i5 9300H 8GB de RAM 256GB SSD, NVIDIA GeForce GTX 1650 1920x1080px Windows 10 Home',
        category: 'PCyNotebooks',
        marca: 'MSI',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_872808-MLA47861913098_102021-F.webp',
        stock: '4',
        description: 'La notebook MSI Thin GF63 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Pantalla con gran impacto visual Su pantalla LED de 15.6" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.',
        price: '1189',
    },
    {
        id: '9',
        name: 'Computadora Pc Gamer Intel Core I5 16gb Video Rtx3050 8gb',
        category: 'PCyNotebooks',
        marca: 'Custom',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_706641-MLU49489164394_032022-F.webp',
        stock: '6',
        description: 'PC GAMER INTEL CORE I5 Excelente para tareas de ofimática, estudio y juegos - Procesador INTEL CORE Core i5-10400F Hexa Core - Memoria Ram 16GB DDR4 - Mother Chipset INTEL H510 actualizable a otros procesadores INTEL - Disco Duro SSD 240GB Sata 3 - Video DEDICADO GEFORCE RTX3050 8GB DDR6',
        price: '1399',
    },
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductsByMarca = (marcaId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.marca === marcaId))
        }, 500)
    })
}