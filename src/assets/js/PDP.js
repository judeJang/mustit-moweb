/* itemsBanner Data */
export const setItemsBannerData = (data) => {
    const imageData = []
    data.forEach((obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && key.startsWith('image')) {
                if (obj[key].trim() !== '' && obj[key] !== undefined) {
                    imageData.push(obj[key])
                }
            }
        }
    })
    return imageData
}

/* badge Data */
export const setBadgeData = (data) => {
    const badgeData = []
    for (const key in data) {
        if (data.hasOwnProperty(key) && (key.startsWith('is') || key === 'timeSale')) {
            badgeData.push({
                name: key,
                value: data[key]
            })
        }
    }
    return badgeData
}

/* location data */
export const setLocationData = (data) => {
    const categoryData = {}

    for (const key in data) {
        if (key.endsWith('Kr')) {
            categoryData[key] = data[key]
        }
    }
    if (Object.keys(categoryData)[1] === 'largeCategoryCodeKr') {
        const combineValue =
            Object.values(categoryData)[0] + Object.values(categoryData)[1]
        const {
            [Object.keys(categoryData)[0]]: removedKey1,
            [Object.keys(categoryData)[1]]: removedKey2,
            ...sliceCategoryData
        } = categoryData

        const newCategoryData = {
            'comblineCategory': combineValue,
            ...sliceCategoryData
        }
        return newCategoryData
    }
    return categoryData
}
