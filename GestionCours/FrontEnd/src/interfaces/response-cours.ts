import { IData } from "./idata"

export interface ResponseCours {
    modules : IData[],
    semestres : IData[],
    classes : IData[],
    profs: IData[]
}

// export interface ResListCours {
//     anne_semestre : {
//         semestre : IData[]
//     },

//     classe_id : IData[],

//     prof_module_id: {
//       prof:IData[]
//     },

//     quantum_horaire : number
// }
