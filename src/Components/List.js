import React, { useEffect, useState } from 'react';
import connector from './API/connector';

export default function List(props) {
	const [ list, setList ] = useState([]);
	const [ isLoading, setLoading ] = useState(true);
	const { func } = props;
	useEffect(() => {
	  const lqist = connector('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
	  lqist.then((value) => {
	  	setLoading(false);
	  	setList([...value]);
	  	console.log(list);
	  })
	},[])
    if(isLoading){
      return(<div>Не отвлекай...</div>)
    } else {
    	return(<div>
    		<ul>{list.map(o => {
    			return (<li>
    			  <button type='submit' onClick={() => {
    			  	func(o.id);
    			  }}>{o.name} </button>
    			</li>);
    		})}</ul>
    		</div>)
    }
	

}

/*async function connector(url){
  const response = await fetch(url);
  const listData = await response.json();
  return listData
}*/