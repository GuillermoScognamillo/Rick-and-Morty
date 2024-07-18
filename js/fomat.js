export const formateo = {
    especie: (especie) => {
        switch (especie) {
            case 'Human':
                return 'Humano'
            case 'Alien':
                return 'Alien'
            case 'Humanoid':
                return 'Humanoide'
            case 'Poopybutthole':
                return 'Poopybutthole'
            case 'Mythological':
                return 'Mitologico'
            case 'unknown':
                return 'desconocido'
            default:
                return especie;
        }   
   },

   status: (status) => {
        switch(status){
            case 'Alive':
                return 'Vivo'
            case 'Dead':
                return 'Muerto'
            case 'unknown':
                return 'desconocido'
            default:
                return especie
        }
   }
}