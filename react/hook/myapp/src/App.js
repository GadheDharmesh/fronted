export default function APP()
{
  const x= ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
      let html ="<h1> --- Api data --- </h1>"
      
      data.map((v)=>(

      html = html +
    `<img id='op' src="${v.url}" alt="ghar bhego tha ne"/>`
        
    ))
    if(1==1)
    (
      document.getElementById('op').innerHTML = html
    )

     
    })
    }
  
  return(
    <>
   
    <button onClick={x}>get data</button>
    <div id="op">hell0 moto </div>
   
    
    </>
   
    )
  
}