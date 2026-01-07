export const weatherLoader = async ({ request }) => {
    const url = new URL(request.url);
    const location = url.searchParams.get("q=") || "bucuresti";

    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d7a21304535c41b7a07211753252712&q=${location}&days=14&aqi=yes&alerts=yes`);

    if(!res.ok){
        throw new Error("Problem")
    }

    const data = await res.json();
    return data
}