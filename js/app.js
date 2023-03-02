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
    hubs.tools.forEach(hub => {
        
        const {image,name,features,published_in} = hub;
        cardContainer.innerHTML += ` 
            <div class="col">
                <div class="card h-100 w-full h-96">
                <img src=${image} class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">1. ${features[0]}.</p>
                    <p class="card-text">2. ${features[1]}.</p>
                    <p class="card-text">3. ${features[2]}.</p>
                </div>
                <hr class="bg-black">
                <div class="card-footer bg-white border-0 d-flex justify-content-between">
                
                    <div>  
                        <h5 class="card-title">${name}</h5>
                        <small class="text-muted">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        ${published_in}</small>
                    </div>
                    <div class="">
                    <button type="button" class="btn btn-outline-danger rounded-circle">
                    <i class="fas fa-arrow-right pt-2 pl-5"  data-bs-toggle="modal"
                    data-bs-target="#exampleModal"></i> </button>
                    </div>
                    
                  
                </div>
                </div>
            </div>`
    });
    
}

