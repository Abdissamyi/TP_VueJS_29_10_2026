
const API_URL = 'http://localhost:3000/jobs'

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status}`)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export async function getJobs() {
  const response = await fetch(API_URL)
  return handleResponse(response)
}

export async function getJob(id) {
  const response = await fetch(`${API_URL}/${id}`)
  return handleResponse(response)
}

export async function createJob(job) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })

  return handleResponse(response)
}

export async function updateJob(id, job) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })

  return handleResponse(response)
}

export async function deleteJob(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  return handleResponse(response)
}
