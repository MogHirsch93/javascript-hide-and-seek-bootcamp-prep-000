function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n){
  let list = document.getElementsByTagName('.ranked-list');
  for(let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + n).toString();
  }
    return list;
}
