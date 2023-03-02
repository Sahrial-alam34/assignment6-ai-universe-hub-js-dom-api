const loadData = async(dataLimit) =>{
    const url=(`https://openapi.programming-hero.com/api/ai/tools`);
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCardDetails(data.data,dataLimit);
    } catch (error) {
        console.log(error);
    }
}


const displayCardDetails = (hubs,dataLimit) =>{
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    

    //hubs = hubs.slice(0,3);
    console.log(hubs.tools.length);
     const showAll = document.getElementById('show-all');
    if(dataLimit && hubs.tools.length > 6){
        
         hubs.tools= hubs.tools.slice(0,6);
         showAll.classList.remove('d-none');
         
    }
    else{
        showAll.classList.add('d-none');
   
    }
    hubs.tools.forEach(hub => {
        
        const {image,name,features,published_in,id} = hub;
        cardContainer.innerHTML += ` 
            <div class="col">
                <div class="card h-100 w-full h-96">
                <img src=${image} class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">1. ${features[0]?features[0]:"No Data Found"}.</p>
                    <p class="card-text">2. ${features[1]?features[1]:"No Data Found"}.</p>
                    <p class="card-text">3. ${features[2]?features[2]:"No Data Found"}.</p>
                </div>
                
                <div class="card-footer bg-white border-0 ">
                    <hr class="bg-black shadow-lg">
                    <div class="d-flex justify-content-between">
                        <div>  
                            <h5 class="card-title">${name}</h5>
                            <small class="text-muted">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            ${published_in}</small>
                         </div>
                        <div class="">
                            <button type="button" onclick="loadItemDetails('${id}')" class="btn btn-outline-danger rounded-circle">
                            <i class="fas fa-arrow-right pt-2 pl-5"  data-bs-toggle="modal"
                            data-bs-target="#itemDetailModal"></i> </button>
                        </div>
                    </div>
                   
                    
                  
                </div>
                </div>
            </div>`
    });

    //stop loader
    toggleSpinner(false);
    
}



//toggle
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

// 



// btn show 
document.getElementById('btn-show-all').addEventListener('click',function(){
    toggleSpinner(true);
    loadData();
})

//loadItemDetails
const loadItemDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayItemDetails(data.data)   
    } catch (error) {
        console.log(error);
    }
  
}

// displayItemDetails
const displayItemDetails = hub =>{
    //console.log('hi');
    console.log(hub);
    // const modalTitle = document.getElementById('itemDetailModalLabel');
    // modalTitle.innerText = hubs.tool_name;
    const modalBody = document.getElementById('item-details');
    const {image_link} = hub;
    console.log(image_link);
    modalBody.innerHTML = `
    <div class="card border-0" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         
        </div>
      </div>
      <div class="col-md-6">
        <img src=${image_link[0]} class="img-fluid rounded-start" alt="...">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
    `
}