var Ptag = '<p class="popup">',
Itag = '<span class="item">',
Name = ['독버섯','양주','광대꽃의 눈','식물덩어리','두리안','야매약','나무수액','설탕수정'],

Info = ['허기 +1, 정신 -1','마실 경우 체력 -1, 정신 +1<br>상처에 사용할 경우 체력 +1, 정신 -1','허기 +1, 체력 +1, 정신 -2','허기 +1, 정신 -1','허기 +1, 정신 -1','체력 +2, 정신 -2','체력 +1','허기 +1'];

for(i=0;i<Name.length;i++){
document.getElementById("item"+i).innerHTML = Itag + Name[i] + Ptag + Info[i] +"</p></span>";
}


