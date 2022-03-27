export async function simpleGet(url) {
    try {
        const apiResult = await fetch(url).then((response)=>response.json())
        return apiResult;
    }catch (err){
        return{error: 'Se ha producido un error : ${err}'}

    }
}