const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469plb599cjsn0355f0f200d5',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com',
  },
};

const fecthIpInfo = (ip) => {
  fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    OPTIONS
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};

const $form = document.querySelector('#form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $input = document.querySelector('#ip');
  fecthIpInfo($input.value);
});
