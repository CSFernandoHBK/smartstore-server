import { rastrearEncomendas } from 'correios-brasil';

async function getTracking(code: string[]){
    const resultado = await rastrearEncomendas(code);
    return resultado[0].eventos;
}

const trackingService = {
    getTracking
}

export default trackingService;