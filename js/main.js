async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getDashboardData = async (query) => {
    const city = fetchJson(`http://localhost:3333/destinations?search=${query}`)
    const weather = fetchJson(`http://localhost:3333/weathers?search=${query}`)

    const dashboard = await Promise.all([city, weather])

    console.log(dashboard)

    console.log(`
        Nome completo: ${dashboard[0][0].name}
        Paese: ${dashboard[0][0].country}
        Temperatura: ${dashboard[1][0].temperature}°C
        Temperatura: ${dashboard[1][0].weather_description}
        `
    );
}

//TEST
getDashboardData('london');