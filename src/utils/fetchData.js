export const fetchData = async (url, options) => {
    const responsem= await fetch(url,options);
    const data = await responsem.json();

    return data;
}