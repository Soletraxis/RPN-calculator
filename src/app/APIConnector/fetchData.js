const fetchData = async () => {
  let res = 'hehe';

  await fetch('http://soletraxis.pythonanywhere.com/api').then((response) => {
    return response.json()
  })
    .then((myJson) => {
      res = myJson;
    }).catch((e) => res = 'Error')

  return res
}

export default fetchData;
