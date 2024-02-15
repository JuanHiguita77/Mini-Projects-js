//Imports
import { URLJobs } from '../API/URLS.js';
import { deleteHttp, get, post, put } from '../API/clientHttp.js';
import { printJobs } from './functionsDOM.js';

//Selectors
const jobsForm = document.querySelector('#jobsForm');

export const idJobUpdated = document.querySelector("#idJobUpdated");
export const titleJob= document.querySelector('#title-job');
export const experience = document.querySelector('#experience');
export const salary = document.querySelector('#salary');
export const location = document.querySelector('#location');
export const modality = document.querySelector('#modality');
export const description = document.querySelector('#description');

const companyLogged = JSON.parse(localStorage.getItem('company'));

document.addEventListener('DOMContentLoaded', () =>
{
  getJobs(URLJobs);
}); 


jobsForm.addEventListener('submit', (e) =>
{
  e.preventDefault();

  if (idJobUpdated.value) {
    loadInfoJobs(idJobUpdated.value);
  }
  else {
    createJob();
  }
})

async function createJob()
{
  const newJob =
  {
    image: 'assets/img/logo.webp',
    titleJob: titleJob.value,
    description: description.value,
    location: location.value,
    experience: experience.value,
    modality: modality.value,
    salary: salary.value,
    datePublication: new Date().toISOString().split('T')[0],
    companyId: companyLogged[0].id,
  }

  await post(URLJobs, newJob);
}

async function getJobs(URLJobs) {
  const data = await get(`${URLJobs}?_embed=company`);

  printJobs(data);
}

export async function deleteJobs(idJob) {
  await deleteHttp(URLJobs, idJob);
}

async function loadInfoJobs(idJob)
{
  const infoUpdated =
  {
    image: 'assets/img/logo.webp',
    titleJob: titleJob.value,
    experience: experience.value,
    salary: salary.value,
    location: location.value,
    modality: modality.value,
    description: description.value,
    datePublication: new Date().toISOString().split('T')[0],
    companyId: companyLogged[0].id,
  }

  await put(URLJobs, idJob, infoUpdated);
}