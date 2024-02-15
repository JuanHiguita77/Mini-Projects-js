import { cleanHtml } from "../utils/cleanHtml.js";
import { deleteJobs, description, experience, idJobUpdated, location, modality, salary, titleJob } from "./index.js";

const bodyJobs = document.querySelector('#bodyJobs');
const openVacantModal = document.querySelector("#OpenVacantModal");

export function printJobs(data)
{
  cleanHtml(bodyJobs);

  //const companyLogged = JSON.parse(localStorage.getItem('company'));
  
  data.forEach(job => {
    const tr = document.createElement('tr');

    const tdImage = document.createElement('td');
    const tdCompany = document.createElement('td');
    const tdDescription = document.createElement('td');
    const tdLocation = document.createElement('td');
    const tdExperience = document.createElement('td');
    const tdModality = document.createElement('td');
    const tdSalary = document.createElement('td');
    const tdActions = document.createElement('td');

    const buttonEdit = document.createElement('button');
    const buttonDelete = document.createElement('button');

    tdImage.innerHTML = `<img src="${job.image}" class="rounded-circle img-fluid">`;
    tdCompany.textContent = job.company.nameCompany;
    tdDescription.textContent = job.description;
    tdLocation.textContent = job.location;
    tdExperience.textContent = job.experience;
    tdModality.textContent = job.modality;
    tdSalary.textContent = job.salary;

    buttonEdit.classList.add('btn', 'btn-primary');
    buttonDelete.classList.add('btn', 'btn-danger');

    buttonEdit.textContent = 'Editar';
    buttonDelete.textContent = 'Eliminar';

    buttonDelete.addEventListener('click', () => {
      deleteJobs(job.id);
    })

    buttonEdit.addEventListener('click', () => {
      loadInfoJobs(job);
    })

    tdActions.appendChild(buttonEdit);
    tdActions.appendChild(buttonDelete);

    tr.appendChild(tdImage);
    tr.appendChild(tdCompany);
    tr.appendChild(tdDescription);
    tr.appendChild(tdLocation);
    tr.appendChild(tdExperience);
    tr.appendChild(tdModality);
    tr.appendChild(tdSalary);
    tr.appendChild(tdActions);

    bodyJobs.appendChild(tr);
  });
}

function loadInfoJobs(job)
{
  openVacantModal.click();

  idJobUpdated.value = job.id;

  titleJob.value = job.titleJob;
  experience.value = job.experience;
  salary.value = job.salary;
  location.value = job.location;
  modality.value = job.modality;
  description.value = job.description;
}
