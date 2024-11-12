

let list = document.createElement('ul');
document.body.appendChild(list);


let hue = 119;  

for (let i = 0; i < 5; i++) {
    let listitem = document.createElement('li');
    listitem.innerText = `Rad ${i + 1}`;
    listitem.style.color = 'purple'
    listitem.style.listStyle = 'none';
    let heightvariable = 20 + i*5;
    listitem.style.height = `${heightvariable}px`;
    listitem.style.fontSize = `${heightvariable}px`;
    listitem.style.textAlign = 'center';
    listitem.style.marginTop = '15px';
    listitem.style.padding = '5px';
    

    
    
    let listBc = `hsl(${hue}, 100%, 78%)`; 
    listitem.style.backgroundColor = listBc;
    hue+=25; 
    list.appendChild(listitem);
}

let mainDiv = document.createElement('div');
mainDiv.style.height = '300px';
mainDiv.style.border = 'solid 2px black';
mainDiv.style.width = '90%';
mainDiv.style.margin = 'auto';
mainDiv.style.display = 'flex';
mainDiv.style.justifyContent = 'space-evenly';

document.body.appendChild(mainDiv);

let insideDiv = document.createElement('div');
insideDiv.style.width = '100px';
insideDiv.style.height = '90%';
insideDiv.style.backgroundColor = 'purple';
insideDiv.style.display = 'flex';
insideDiv.style.marginTop = '15px'
mainDiv.appendChild(insideDiv);
let list2 = document.createElement('ul');
insideDiv.appendChild(list2);
for(i=0; i<10; i++){
    let listitem2 = document.createElement('li');
    listitem2.innerText = [i];
    list2.style.marginRight = '20px';
    list2.style.listStyle = 'none';
    list2.style.width = '90%';
    list2.appendChild(listitem2);
    if(i%2==1){
        listitem2.style.backgroundColor = 'white'
    }
    else(listitem2.style.backgroundColor='black', listitem2.style.color = 'white')
    if(i==4){
        listitem2.style.backgroundColor = 'purple'
    }
}

let insideDiv2 = document.createElement('div');
insideDiv2.style.width = '100px';
insideDiv2.style.height  = '90%';
insideDiv2.style.backgroundColor = 'purple';
insideDiv2.style.display = 'flex';
mainDiv.appendChild(insideDiv2)
let list3 = document.createElement('ul');
insideDiv2.appendChild(list3)
for(j=9; j>0; j-=1){
    let listitem3 = document.createElement('li');
    listitem3.innerText = [j];
    list3.appendChild(listitem3)
    list3.style.listStyle = 'none';
    list3.style.listStylePosition = 'inside'
    list3.style.marginRight = '20px'
    list3.style.textAlign = 'center';
    list3.style.width = '70%'
    if(j%2==1){
        listitem3.style.backgroundColor = 'white';
        listitem3.style.color = 'black'
    }
    else(listitem3.style.backgroundColor = 'black',
    listitem3.style.color = 'white')
    if(j==8){
        listitem3.style.backgroundColor = 'purple'
    }
}


let insideDiv3 = document.createElement('div');
insideDiv3.style.width = '100px';
insideDiv3.style.height  = '90%';
insideDiv3.style.backgroundColor = 'purple';
insideDiv3.style.display = 'flex';
insideDiv3.style.justifyContent = 'end';
mainDiv.appendChild(insideDiv3)
let list4 = document.createElement('ul');
insideDiv3.appendChild(list4);
let arr = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
for(k=0; k<arr.length; k++){
   let listitem4 = document.createElement('li');
   listitem4.innerText = arr[k];
   list4.appendChild(listitem4);
   list4.style.listStyle = 'none';
   list4.style.width = '70%';
   if(k%2==1){
    listitem4.style.backgroundColor = 'white'
   }
   else(listitem4.style.backgroundColor = 'black',
   listitem4.style.color = 'white')
}