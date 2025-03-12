// deno-lint-ignore-file
export const getUser = (ctx:any)=>{

    const {response} = ctx;

    response.status = 200;
    response.body = {
        message: "Peticion Autorizada"
    }
}

export const postUser = (ctx:any)=>{

    const {response} = ctx;

    response.status = 200;
    response.body = {
        message: "Peticion Autorizada"
    }
}

export const putUser = (ctx:any)=>{

    const {response} = ctx;

    response.status = 200;
    response.body = {
        message: "Peticion Autorizada"
    }
}

export const deleteUser = (ctx:any)=>{

    const {response} = ctx;

    response.status = 200;
    response.body = {
        message: "Peticion Autorizada"
    }
}