const products = [
    {
        id:"AD376HU10",
        title:"Cesna Citation X",
        category:"jets",
        description:"Reactor corporativo ligero",
        descriptionLong:"Cessna Citation X es un avión a reacción comercial de largo alcance que cuenta con una velocidad máxima de Mach 0.935, lo que lo hace más rápido que el Gulfstream G650 y actualmente el avión civil más rápido del mundo. Puede navegar a hasta 51,000 pies. Citation X se anunció en la convención de 2010 de la Asociación Nacional de Aviación Comercial (NBAA). El vuelo inaugural del primer prototipo se completó con éxito en enero de 2012. La certificación de tipo de la Administración Federal de Aviación (FAA) de EE. UU. Se otorgó en junio de 2014. Las entregas comenzaron el mismo mes de ese año.",
        price:'42.000.000',
        modelYear:2011,
        label:"LV-AEF",
        use:45053,
        equipment:["VHF","VOR","DME","ADF","ATC","GPS","ILS"],
        pictureUrl:"https://www.ainonline.com/sites/ainonline.com/files/uploads/2018/06/x1.jpg",
        stock:10
    },
    {
        id:"KLDI9828BVGYC",
        title:"Beechcraft Baron G58",
        category:"propellers",
        description:"Avión ligero bimotor de pistón",
        descriptionLong:"El Beechcraft Baron es un avión ligero bimotor de pistón desarrollado por la Beech Aircraft Corporation y actualmente fabricado por la Hawker Beechcraft Corporation, perteneciente a la Onex Holding Corporation. El Baron es una variante del Beechcraft Bonanza, y fue introducido en 1961. Beech también ofrecía la línea de Twin Bonanza; ambos comparten muchos elementos de diseño con el Bonanza, pero en todos los aspectos son aviones completamente diferentes y no deben ser considerados como Bonanza bimotores.",
        price:"220.000",
        modelYear:1991,
        label:"LV-CRZ",
        use:13675,
        equipment:["VHF","VOR","DME","ADF","ATC","GPS","ILS"],
        pictureUrl:"https://aircharterservice-globalcontent-live.cphostaccess.com/images/spain/aircraft/private/802190_beech205820baron20ext20pic_tcm71-3916.jpg",
        stock:2
    },
    {
        id:"JSD932ISD8",
        title:"Cessna 172 Skyhawk",
        category:"propellers",
        description:"Avión monomotor de ala alta",
        descriptionLong:"El Cessna 172 Skyhawk es un avión monomotor de ala alta con capacidad para cuatro personas fabricado por la empresa Cessna. El Cessna 172 es el avión más fabricado de la historia y probablemente el avión de entrenamiento más popular del mundo. A causa de su diseño de ala alta, su estabilidad en vientos de baja velocidad y su relativamente baja velocidad de entrada en pérdida, el Cessna 172 es un excelente aparato para múltiples usos, como el entrenamiento, el recreo, el transporte ligero y las operaciones de búsqueda y rescate. Muchos países y corporaciones han empleado este modelo en una variedad de usos, desde civiles a militares.",
        price:"45.000",
        modelYear:1982,
        label:"LV-BEC",
        use:23483,
        equipment:["VHF","VOR","DME","ADF","ATC","GPS","ILS"],
        pictureUrl:"https://i1.wp.com/todoaviones.net/wp-content/uploads/2020/07/image-fotoshowBig-2dc28c67-1252426.jpg?w=740&ssl=1",
        stock:5
    },
    {
        id:"KJHS98298T2W",
        title:"Cessna 208 Caravan",
        category:"anphibian",
        description:"Avión utilitario turbohélice",
        descriptionLong:"El Cessna 208 Caravan, también conocido como Cargomaster, es un avión regional/utilitario turbohélice de corto alcance fabricado en los Estados Unidos por la compañía Cessna. La versión convencional cuenta con 10 plazas (9 pasajeros y un piloto), si bien un posterior diseño según nuevas regulaciones de la Federal Aviation Administration (FAA) puede llevar hasta 14 pasajeros. El avión también es muy empleado para realizar conexiones en los servicios de carga, de manera que las mercancías que llegan a aeropuertos más pequeños son transportadas a los grandes hubs para su distribución.",
        price:"97.000",
        modelYear:1974,
        label:"LV-AAD",
        use:123483,
        equipment:["VHF","VOR","ATC"],
        pictureUrl:"https://www.hangar-7.com/fileadmin/_processed_/8/f/csm_h_00023120_1634accefb.jpg",
        stock:9
    },
    {
        id:"AYR3VN8DA",
        title:"Air Tractor AT-400",
        category:"sprayer",
        description:"Avión aeroaplicador",
        descriptionLong:"El Air Tractor AT-400 es una familia de aviones agrícolas que voló por primera vez en los Estados Unidos en septiembre de 1979. La certificación de tipo fue otorgada a Air Tractor en abril de 1980. De configuración de taildragger monoplano de ala baja, llevan una tolva química entre el motor cortafuegos y la cabina. ",
        price:"12.000",
        modelYear:1988,
        label:"LV-XZR",
        use:1000000,
        equipment:["VHF","UHF"],
        pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/AirTractor_402.jpg/1200px-AirTractor_402.jpg",
        stock:12
    }
];

export const getProducts = (category) => {
    return new Promise( (res) => {
        setTimeout( () => {
            category    ? res(products.filter( (item) => category === item.category ))
                        : res(products);
        }, 2000);
    });
};

export const getProduct = (id) => {
    return new Promise( (res) => {
        setTimeout( () => {
            res(products.find( (item)=> id === item.id ));
        }, 2000);
    });
};