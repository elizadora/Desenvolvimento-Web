import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 100
}

export const idSlice = createSlice({
    // nome do slice
    name: "id",

    // passa o estado inicial da variavel
    // coloca apenas uma vez o nome porque initialState eh o mesmo nome
    // tanto para a propriedade quanto para a const
    // Exemplo initialState: estadoInicial
    initialState,

    //funcoes que permitem alterar esse estado global
    reducers: {
        incrementar: (state) => {
            state.value += 1
        },
        
        decrementar: (state) => {
            state.value -= 1
        },

        incrementarValor: (state, action) => {
            state.value += action.payload
        },
        
        decrementarValor: (state, action) => {
            state.value -= action.payload
        },

    }

}) 

// export das funções como ações
export const {incrementar, decrementar, incrementarValor, decrementarValor} = idSlice.actions;

export default idSlice.reducer;