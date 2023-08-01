import { Subject } from "rxjs/internal/Subject"
import { scan } from "rxjs/internal/operators/scan"

const initialState ={
    user: {
        login: 'login',
        password: '',
        confirmPassword: ''
}
}

const login = document.querySelector('login')

function reducer(state = initialState, action: any){
    switch( action.type) {
        case 'register': return {
            ...state, login: state.user.login + action.value
        }
        default: return state
    }
}

function createStore(rootReducer: any){
    const subj$ = new Subject()
    const store$ = subj$.pipe(
        scan(rootReducer, undefined)

    )
    return store$
}

const store$ = createStore(reducer)
store$.subscribe(state=>{

})

// document.getElementById('login').addEventListener('input', ()=>{

// })