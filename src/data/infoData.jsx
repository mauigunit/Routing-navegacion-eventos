const productosData = [
    { 
      id: 1, 
      producto: "Leche", 
      categoria: "Lácteos", 
      descripcion: "Leche entera, 1 litro", 
      urlImagen: "images/Leche-entera-sin-tapa-1-L.png"
    },
    { 
      id: 2, 
      producto: "Pan", 
      categoria: "Panadería", 
      descripcion: "Pan blanco, paquete de 6 piezas", 
      urlImagen: "https://images.unsplash.com/photo-1603192436769-b2eb2e648a67?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDgxfHxwYW5fY2hhbGxlbmdlbnxlbnwwfHx8fDE2Nzc5NjczMTI&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 3, 
      producto: "Arroz", 
      categoria: "Granos", 
      descripcion: "Arroz blanco, paquete de 1 kg", 
      urlImagen: "https://images.unsplash.com/photo-1594573081514-385d2b49a00c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDkxfHxhcml6fGVufDB8fHx8fDE2Nzc5NjczNzM&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 4, 
      producto: "Manzanas", 
      categoria: "Frutas", 
      descripcion: "Manzanas rojas, paquete de 6 unidades", 
      urlImagen: "https://images.unsplash.com/photo-1590561774287-5e42610ff5db?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDI5fHxhbXBsZXN8ZW58MHx8fHx8fDE2Nzc5NjczODg&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 5, 
      producto: "Pechuga de Pollo", 
      categoria: "Carnes", 
      descripcion: "Pechuga de pollo sin hueso, 1 kg", 
      urlImagen: "https://images.unsplash.com/photo-1556914211-3e5c87ad3016?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDgxfHxjaGlja2VuX3BvbGxvfGVufDB8fHx8fDE2Nzc5NjczOTg&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 6, 
      producto: "Tomates", 
      categoria: "Verduras", 
      descripcion: "Tomates frescos, 500g", 
      urlImagen: "https://images.unsplash.com/photo-1577431483290-f5fd3a392f9d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDgzfHx0b21hdG98ZW58MHx8fHx8fDE2Nzc5Njc1M2M&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 7, 
      producto: "Cereal", 
      categoria: "Desayuno", 
      descripcion: "Cereal integral, caja de 500g", 
      urlImagen: "https://images.unsplash.com/photo-1614250474319-dcd25b8a0d56?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDkzfHxjZXJlYWwlMjBjdWxpc3xlbnwwfHx8fDE2Nzc5Njc1NTg&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 8, 
      producto: "Jabón", 
      categoria: "Aseo", 
      descripcion: "Jabón de tocador, barra de 90g", 
      urlImagen: "https://images.unsplash.com/photo-1597562116762-3be6a82fc0e0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDk4fHxqYWJvb2Z8ZW58MHx8fHx8fDE2Nzc5Njc1N2Q&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 9, 
      producto: "Agua Mineral", 
      categoria: "Bebidas", 
      descripcion: "Agua mineral embotellada, 500ml", 
      urlImagen: "https://images.unsplash.com/photo-1600173959940-d0198f06c1f9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDk4fHxhd2FfYWxsX3dhdGVyfGVufDB8fHx8fDE2Nzc5Njc1ODQ&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 10, 
      producto: "Aceite de Oliva", 
      categoria: "Aceites", 
      descripcion: "Aceite de oliva extra virgen, botella de 500ml", 
      urlImagen: "https://images.unsplash.com/photo-1611863906819-b2f3dca7fa35?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDI4fHxvbGl2ZV9haWxlfGVufDB8fHx8fDE2Nzc5Njc2MTI&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 11, 
      producto: "Azúcar", 
      categoria: "Alimentos Básicos", 
      descripcion: "Azúcar refinada, paquete de 1 kg", 
      urlImagen: "https://images.unsplash.com/photo-1571494526745-35f8b2530f70?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDg2fHxhdW1fcmVmaW5lZF9zdWdhfGVufDB8fHx8fDE2Nzc5Njc2Mzg&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 12, 
      producto: "Harina", 
      categoria: "Panadería", 
      descripcion: "Harina de trigo, paquete de 1 kg", 
      urlImagen: "https://images.unsplash.com/photo-1612873480973-c02993f907f2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDkzfHxodXJtYW58ZW58MHx8fHx8fDE2Nzc5Njc2NTM&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 13, 
      producto: "Queso", 
      categoria: "Lácteos", 
      descripcion: "Queso rallado, 200g", 
      urlImagen: "https://images.unsplash.com/photo-1611107530735-29c9ed59fbc1?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDg3fHxxdWVzb3xlbnwwfHx8fDE2Nzc5Njc2NzY&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 14, 
      producto: "Papas", 
      categoria: "Verduras", 
      descripcion: "Papas frescas, 1 kg", 
      urlImagen: "https://images.unsplash.com/photo-1565061162-1ca59b47fc82?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDkwfHxwYXBhc3xlbnwwfHx8fDE2Nzc5Njc2NzQ&ixlib=rb-1.2.1&q=80&w=1080"
    },
    { 
      id: 15, 
      producto: "Pescado", 
      categoria: "Pescadería", 
      descripcion: "Filetes de pescado, 500g", 
      urlImagen: "https://images.unsplash.com/photo-1575293725227-d93eac8f903d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhcmNofDI3fHxmaXNoX3BhY2t8ZW58MHx8fHx8fDE2Nzc5Njc2ODk&ixlib=rb-1.2.1&q=80&w=1080"
    }
  ];

  export default productosData;