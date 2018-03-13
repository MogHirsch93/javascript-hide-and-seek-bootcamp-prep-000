function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n){
  let list = document.getElementById('app').querySelector('ul.ranked-list li');
  console.log(list);
    let newList = list.map( (item) => parseInt(item) + n
    )
  return newList;
  }
