async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getDashboardData = async (query) => {
    const city = await fetchJson(`http://localhost:3333/destinations?search=${query}`)

    console.log(`
        Nome completo: ${city[0].name}
        Paese: ${city[0].country}`
    );
}

//TEST
getDashboardData('london');