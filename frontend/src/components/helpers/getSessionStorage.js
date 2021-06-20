

function getSessionStorage(props) {
    const degree = sessionStorage.getItem("degree")
    const year = sessionStorage.getItem("year")  // year is string
    const branchesString = sessionStorage.getItem("branches")
    const branches = JSON.parse(branchesString)
    let obj = {degree,year,branches}
    return obj
}

export default getSessionStorage;