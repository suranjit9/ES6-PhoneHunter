const lodePhone = async(searchText='oppo', isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data;
    displayphone(phone, isShowAll);


}
const displayphone = (phones, isShowAll) =>{
    // console.log(phones);
    const phoneContener = document.getElementById('card-contener');
    phoneContener.textContent='';
    // Show all btn remove $ Show
    const conectdata = document.getElementById('showall0');
    if(phones.length > 12 && !isShowAll){
        
        conectdata.classList.remove('hidden');
        
    }else{
        conectdata.classList.add('hidden');
    }
    
    if(!isShowAll){
        phones = phones.slice(0,12);
        console.log('hi babu',isShowAll);
    }
  
    phones.forEach(phone => {
        // console.log(phone);
         const phonecard = document.createElement('div');
        phonecard.classList=`card p-4 bg-base-500 shadow-xl pt-5`;
        phonecard.innerHTML =`
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>${phone.slug}</p>
              <div class="card-actions justify-end">
                <button onclick ="phonemodal('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
            `;
            phoneContener.appendChild(phonecard);
        
    })
    lodingspner(false);
}
const hendalscearc = (isShowAll) =>{
    const textinput = document.getElementById('pleaseInput');
    lodingspner(true);
    const inputvalue = textinput.value;
    lodePhone(inputvalue, isShowAll);
    // textinput.value='';
    
}



// loging spner
const lodingspner = (istrue) =>{
    const callspner =document.getElementById('spner');
    if (istrue){
   callspner.classList.remove('hidden');
    }else{
        callspner.classList.add('hidden');
    }
}
// click Btn then Show more ten Product

const btnShowPhone = document.getElementById('showPhone');
const clickBtn = () => hendalscearc(true);
lodePhone();


const phonemodal = async (id) =>{
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = res.json();
    const details =data.data;
    showPhonemodal(details);
    console.log(details);
}
const showPhonemodal = (phone) =>{

    my_modal_5.showModal();
    console.log(phone)
    // const modalbox = document.getElementById('modalbox');
    // const createdDiv = modalbox.document.createElement("div");
    // createdDiv.innerHTML =`
    // <h1>hello</h1>
    // `;
}

