function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n){
  let list = document.getElementsByTagName('.ranked-list');
    let newList = list.map( (item) => {
      return parseInt(item) + n;
    })
  }
    return newList;
}
