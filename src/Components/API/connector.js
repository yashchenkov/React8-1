export default async function connector(url){
  const response = await fetch(url);
  const listData = await response.json();
  return listData
}