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
const $input = document.querySelector('#ip');
const $submit = document.querySelector('#submit');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute('disabled', '');
  $submit.setAttribute('aria-busy', 'true');

  const ipInfo = await fecthIpInfo(value);
});
