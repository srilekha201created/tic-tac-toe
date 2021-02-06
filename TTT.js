var restartb=document.querySelector('#b')
var cells=document.querySelectorAll('td')

function clearAllCells(){
  for(cell of cells){
    cell.textContent=''
  }
}
restartb.addEventListener('click',clearAllCells)

function changeContent(){
  if(this.textContent==''){
    this.textContent='x'
  }
  else if (this.textContent=='x') {
    this.textContent='o'

  }
  else{
    this.textContent=''
  }
}

for(cell of cells){
  cell.addEventListener('click',changeContent)
}
