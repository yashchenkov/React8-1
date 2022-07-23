import React, { useEffect, useState } from 'react';

export default function List() {
	const [ list, setList ] = useState([]);
	const [ isLoading, setLoading ] = useState(true);
	useEffect(() => {
	  const lqist = connector('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
	  lqist.then((value) => {
	  	setLoading(false);
	  	//setList([...list,value]);
	  	console.log(value);
	  })
	})
    console.log(list)
    if(isLoading){
      return(<div>Загрузка...</div>)
    } else {
    	return(<div>Готово</div>)
    }
	

}

async function connector(url){
  const response = await fetch(url);
  const listData = await response.json();
  return listData
}