//Imports
import { URLJobs } from '../API/URLS.js';
import { cleanHtml } from '../utils/cleanHtml.js';
import { get } from '../API/clientHttp.js'; 

//selectors
const jobsCardsContainer = document.querySelector('#jobsCardsContainer');

const modalityFilter = document.querySelector('#modality-filter');
const searchInput = document.querySelector('#searchInput');

document.addEventListener('DOMContentLoaded', () =>
{
  printJobs();
});

searchInput.addEventListener('input', () => {
  searchJobs();
});

modalityFilter.addEventListener('change', () =>
{
  searchJobs();
})

async function printJobs()
{
  cleanHtml(jobsCardsContainer);

  const data = await get(URLJobs);

  data.forEach(job =>
  {
    const { image, titleJob, description, location, experience, modality, datePublication } = job;

    jobsCardsContainer.innerHTML +=
      `
      <div class="card-job">
          <h2>${titleJob}</h2>

          <p>Description: ${description}</p>
          <p>${experience} mounths of experience</p>

          <div class="row">
            <div class="col-6">
              <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                <i class="bx bx-current-location"></i>
                <span class="fw-semibold">${location}</span>
                </div>
                
                <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                <i class="bx bx-time"></i>
                <span class="fw-semibold">${datePublication}</span>
                <span class="fw-semibold">Modality: ${modality}</span>
                
                </div>
                </div>
                
            <div class="col-6 d-flex justify-content-end">
              <img
                src=${image}
                alt="logo"
                height="80"
                width="80"
                class="object-fit-contain rounded-circle img-company"
              />
            </div>
          </div>
        </div>
      </div>`
  });
}

async function searchJobs()
{
  cleanHtml(jobsCardsContainer);
  
  const data = await get(`${URLJobs}?titleJob=${searchInput.value}&modality=${modalityFilter.value}`)

  data.forEach(job => {
    const { image, titleJob, description, location, experience, modality, datePublication } = job;

    jobsCardsContainer.innerHTML +=
      `
      <div class="card-job">
          <h2>${titleJob}</h2>

          <p>Description: ${description}</p>
          <p>${experience} mounths of experience</p>

          <div class="row">
            <div class="col-6">
              <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                <i class="bx bx-current-location"></i>
                <span class="fw-semibold">${location}</span>
                </div>
                
                <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                <i class="bx bx-time"></i>
                <span class="fw-semibold">${datePublication}</span>
                <span class="fw-semibold">Modality: ${modality}</span>
                
                </div>
                </div>
                
            <div class="col-6 d-flex justify-content-end">
              <img
                src=${image}
                alt="logo"
                height="80"
                width="80"
                class="object-fit-contain rounded-circle img-company"
              />
            </div>
          </div>
        </div>
      </div>`
  });
}