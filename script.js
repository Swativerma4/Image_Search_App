const accesskey="WpvmS5J8rr55HNtGWjzGCwF5H6iPQSuBV3hSsNuEzYc";
const container=document.getElementById("container");
const search_box=document.getElementById("search-box");
const search_result=document.getElementById("search-result");
const show_more_btn=document.getElementById("show_more_btn");

let keyword="";
let page=1;
async function searchimage(){
    keyword=search_box.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response= await fetch(url);
  const data =await response.json();
       const results = data.results;
       results.map((result)=>{
        const image =document.createElement("img");
        image.src =result.urls.small;
        const imagelink =document.createElement("a");
        imagelink.href= result.links.html;
      imagelink.target ="_blank";
    imagelink.appendChild(image);
  search_result.appendChild(imagelink);
  
       })
       show_more_btn.style.display="block";
}
 container.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimage();
});
show_more_btn.addEventListener("click" ,()=> {
  page++;
  searchimage();
})