function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n){
  let list = document.getElementsByName('ranked-list');
    let newList = list.map( (item) => parseInt(item) + n
    )
  return newList;
  }
