export const getCars = async () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: "99fa9fj9ak0dsak0f3k0a",
                    name: "Sean's Car",
                    make: "Porsche",
                    year: "2016",
                    model: "911",
                    plate: "SC - DHG656",
                    image: "..?"
                },
                {
                    id: "99fa9fj9ak0dsak0f3k0a",
                    name: "Sean's Car 2",
                    make: "Porsche",
                    year: "2016",
                    model: "911",
                    plate: "SC - DHG656",
                    image: "..?"
                }
            ])
        }, 1500)
    }))
}

export default {getCars}