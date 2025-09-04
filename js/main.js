const getDashboardData = async (query) => {
    const città = await fetch(`http://localhost:3333/users/destinations?search=${query}`)
    console.log(città)
}

//TEST
getDashboardData(Roma);