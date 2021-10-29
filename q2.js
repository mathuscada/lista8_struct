const Arthur = {
    "paoDeQueijo": false,
    "pet": false,
    "carteiraDeTrabalho": true,
    "relogio": 18
}

const vencerEduardo = ({paoDeQueijo}) => paoDeQueijo;
const vencerGabriel = (arthur) => vencerEduardo(arthur) && arthur.pet;
const vencerFelipe = (arthur) => {
    return vencerEduardo(arthur) && vencerGabriel(arthur) && arthur.carteiraDeTrabalho;
};
const entrarNaSurdina = ({relogio}) => relogio>=18;

console.log((vencerFelipe(Arthur)||entrarNaSurdina(Arthur)) ? "Arthur conseguiu vencer a GP!" : "Arthur falhou em vencer a GP");
