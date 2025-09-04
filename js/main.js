async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getDashboardData = async (query) => {
    const city = fetchJson(`http://localhost:3333/destinations?search=${query}`)
    const weather = fetchJson(`http://localhost:3333/weathers?search=${query}`)
    const airport = fetchJson(`http://localhost:3333/airports?search=${query}`)

    const dashboard = await Promise.all([city, weather, airport])

    console.log(`
       ${dashboard[0][0].name} is in ${dashboard[0][0].country}.
       Today there are ${dashboard[1][0].temperature} degrees and the weather is ${dashboard[1][0].weather_description}.
        The main airport is ${dashboard[2][0].name}.
        `
    );
}

//TEST
getDashboardData('london');