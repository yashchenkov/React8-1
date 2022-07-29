import React from 'react';

export default function Details(props) {
  const { data } = props;
  if(data !== undefined) {
	  return(
	  	<div>
	  		<img src={data.avatar} alt="" className="avatar" />
	  		<h3 className='name'>{data.name}</h3>
	  		<div><span>City:</span>{data.details.city}</div>
	  		<div><span>Company:</span>{data.details.company}</div>
	  		<div><span>Position:</span>{data.details.position}</div>
	  	</div>
	  )
	}

}