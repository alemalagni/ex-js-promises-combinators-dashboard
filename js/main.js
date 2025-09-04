const getDashboardData = async (query) => {
    const città = await fetch(`http://localhost:3333/destinations?search=${query}`)
    const cittàResponse = città.json();
    console.log(cittàResponse)
}

//TEST
getDashboardData('london');