const loadData = async() =>{
    const url=(`https://openapi.programming-hero.com/api/ai/tools`);
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCardDetails(data.data);
    } catch (error) {
        console.log(error);
    }
}


const displayCardDetails = (hubs) =>{
    console.log(hubs.tools[0]);
    const cardContainer = document.getElementById('card-container');
    
}

