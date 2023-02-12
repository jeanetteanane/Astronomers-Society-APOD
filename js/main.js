document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)
  //fetch using nasa api
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('a').innerText = data.url
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

