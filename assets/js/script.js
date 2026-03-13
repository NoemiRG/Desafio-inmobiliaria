const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://sohogallery.cl/wp-content/uploads/2019/01/mejores-apartamentos-pisos-lujo-mundo-78.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://www.iloveski.org/wp-content/uploads/2024/09/decoracion-salon-casa-montana-2025.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://static2.mansionglobal.com/production/media/article-images/271951bdf0aee63c391512807a911933/large_TEN50_Penthouse-1.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 2,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Loft amplio en barrio histórico',
        src: 'https://http2.mlstatic.com/D_NQ_NP_968924-MLC104997557349_012026-O-amplio-y-funcional-loft-en-casco-historico.webp',
        descripcion: 'Loft de estilo industrial con amplios espacios y ubicado en un barrio lleno de cultura y restaurantes.',
        ubicacion: 'Barrio Lastarria, Santiago, Chile',
        habitaciones: 2,
        baños: 1,
        costo: 2100,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Penthouse con terraza panorámica',
        src: 'https://www.toppropiedades.cl/imagenes/b_c1981u6668coc1341f.jpg',
        descripcion: 'Amplio penthouse con terraza y vista panorámica de la ciudad, ideal para quienes buscan comodidad.',
        ubicacion: 'Av. Apoquindo 3200, Las Condes, Santiago, Chile',
        habitaciones: 3,
        baños: 2,
        costo: 3200,
        smoke: true,
        pets: false
    }
]

const divVentas = document.querySelector("#ventas")

const renderVentas = () => {
    let template = ""
    for (v of propiedades_venta) {
        template += ` 
                 <div class="card" style=" width: 360px">
                     <img style="width:100%; height:250px;" src=${v.src}
                    class="card-img-top" alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${v.nombre}
                        </h5>
                        <p class="card-text">
                        ${v.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                            ${v.ubicacion}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${v.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${v.baños} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${v.costo}</p>
                        <p class="${v.smoke ? 'text-success' : 'text-danger'}">
                        ${v.smoke
                ? '<i class="fas fa-smoking"></i> Permitido fumar'
                : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
                        </p>
                        <p class="${v.pets ? 'text-success' : 'text-danger'}">
                        ${v.pets
                ? '  <i class="fas fa-paw"></i>Mascotas permitidas '
                : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
                        </p>
                    </div>
                </div>`

    }
    divVentas.innerHTML = template
}





if (divVentas) {
    renderVentas()
}


const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1266232920316945305/original/76a91af1-c1ec-4a5d-9e85-5a7c9f101b29.jpeg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://cdn.meretdemeures.com/media/uploads/3bc5dd97-2d88-48e3-9b4e-7ec32a3d0c5c.webp',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://www.shutterstock.com/image-photo/new-modern-block-flats-green-600nw-2461488711.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento moderno cerca del parque',
        src: 'https://www.toppropiedades.cl/imagenes/b_c261u588co6517f5.png',
        descripcion: 'Departamento moderno y luminoso ubicado a pasos de un gran parque y con excelente conectividad.',
        ubicacion: 'Av. Providencia 1200, Santiago, Chile',
        habitaciones: 1,
        baños: 1,
        costo: 1800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento acogedor cerca del metro',
        src: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1342625114981843453/original/b625b4fd-7589-4a63-8520-189a65e859f0.jpeg?im_w=720',
        descripcion: 'Departamento cómodo y bien iluminado ubicado a pocos pasos del metro y con acceso a comercios.',
        ubicacion: 'Av. Libertador 850, Santiago, Chile',
        habitaciones: 2,
        baños: 1,
        costo: 1900,
        smoke: false,
        pets: true
    }
]

const divAlquiler = document.querySelector("#alquileres")

const renderAlquileres = () => {
    let template = ""
    for (a of propiedades_alquiler) {
        template += ` 
                 <div class="card" style=" width: 360px">
                     <img style="width:100%; height:250px;" src=${a.src}
                    class="card-img-top" alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${a.nombre}
                        </h5>
                        <p class="card-text">
                        ${a.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                            ${a.ubicacion}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${a.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${a.baños} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${a.costo}</p>
                        <p class="${a.smoke ? 'text-success' : 'text-danger'}">
                        ${a.smoke
                ? '<i class="fas fa-smoking"></i> Permitido fumar'
                : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
                        </p>
                        <p class="${a.pets ? 'text-success' : 'text-danger'}">
                        ${a.pets
                ? '  <i class="fas fa-paw"></i>Mascotas permitidas '
                : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
                        </p>
                    </div>
                </div>`

    }
    divAlquiler.innerHTML = template
}

if (divAlquiler) {
    renderAlquileres()
}