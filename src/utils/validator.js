export const idValidation = (id) => {
    let reg = /^[a-z,0-9]{4,10}$/g;
    if( !reg.test(id) ) {
        return false
    } else {
        return true
    }
}

export const passwordValidation = (password) => {
    let reg = /^[a-z,0-9]{6,16}$/g;
    if( !reg.test(password) ) {
        return false
    } else {
        return true
    }
}

export const nameValidation = (name) => {
    let reg = /^[a-z,A-Z,가-힣\s]{2,10}$/g;
    if( !reg.test(name) ) {
        return false
    } else {
        return true
    }
}