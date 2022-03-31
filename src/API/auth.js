export default {
    sendSMS: async (phonenumber) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    }))
},
    verifyCode: async (code) => {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, 1000)
        }))
    }
}