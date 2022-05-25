const products = [
    {
        id: '1',
        name: 'Procesador Intel Core i5-10400F BX8070110400F de 6 núcleos y 4.3GHz de frecuencia',
        category: 'Procesadores',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_842077-MLA45376249655_032021-F.webp",
        stock: '30',
        description: 'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos',
        price: '200',

    },
    {
        id: '2',
        name: 'Procesador gamer AMD Ryzen 5 3600 100-100000031BOX de 6 núcleos y 4.2GHz de frecuencia',
        category: 'Procesadores',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_804739-MLA45376476889_032021-F.webp',
        stock: '12',
        description: 'Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        price: '335',
    },
    {
        id: '3',
        name: 'Procesador gamer Intel Core i7-10700K BX8070110700K de 8 núcleos y 5.1GHz de frecuencia con gráfica integrada',
        category: 'Procesadores',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_957276-MLA45376579781_032021-F.webp',
        stock: '32',
        description: 'Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.',
        price: '559',
    },
    {
        id: '4',
        name: 'Procesador Intel Core I9-12900K BX8071512900K de 16 núcleos y 5.2GHz',
        category: 'Procesadores',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_841035-MLA48536274125_122021-F.webp',
        stock: '9',
        description: 'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.',
        price: '1004',
    },
    {
        id: '5',
        name: 'Procesador gamer Intel Core i7-9700K BX80684I79700K de 8 núcleos y 4.9GHz',
        category: 'Procesadores',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_601081-MLA45377368163_032021-F.webp',
        stock: '23',
        description: 'Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        price: '516',
    },
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}