import axios from 'axios'

const url = "https://api-rato.duckdns.org"

export const GetAaaFamilly = async (family) => {
    try {
        let query = []
        for (let tag in family) {
            query.push(`${tag}=${family[tag]}`)
        }
        //recup 
        return (await recup(`${url}/aaa-family?${query.join('&')}`))

    } catch (error) {
        console.log('error:', error)
    }
}

const recup = async (url2) => {
    try {
        const result = await axios.get(
            url2
        ).then((result) => {
            return result.data
        }).catch((error) => {
            console.log('error:', error)
        })
        return result
    } catch (error) {
        console.log('error:', error)
        return 400
    }
}