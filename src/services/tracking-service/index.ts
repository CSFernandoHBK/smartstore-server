import { rastrearEncomendas } from 'correios-brasil';
import { notFoundError } from '../../errors';
import trackingRepository from '../../repositories/tracking-repository';

async function getTracking(code: string[]){
    const resultado = await rastrearEncomendas(code);
    return resultado[0].eventos;
}

async function getCodeByOrderId(orderId: number){
    const result = await trackingRepository.getCodeByOrderId(orderId);
    if(!result){
        throw notFoundError();
    }
    return result
}

const trackingService = {
    getTracking,
    getCodeByOrderId
}

export default trackingService;