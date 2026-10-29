
<template>
  <section class="form-page">
    <RouterLink to="/" class="back-link">
      ← Retour aux offres
    </RouterLink>

    <h1>Ajouter une offre d'emploi</h1>

    <form class="panel job-form" @submit.prevent="submitJob">
      <label class="form-group">
        Titre du poste
        <input v-model.trim="form.title" required />
      </label>

      <label class="form-group">
        Description
        <textarea
          v-model.trim="form.description"
          required
          rows="5"
        ></textarea>
      </label>

      <label class="form-group">
        Entreprise
        <input v-model.trim="form.company" />
      </label>

      <label class="form-group">
        Lieu
        <input v-model.trim="form.location" />
      </label>

      <label class="form-group">
        Type de contrat
        <select v-model="form.type">
          <option>Stage</option>
          <option>CDI</option>
          <option>CDD</option>
          <option>Freelance</option>
        </select>
      </label>

      <label class="form-group">
        Salaire mensuel (DH)
        <input
          v-model.number="form.salary"
          type="number"
          min="0"
        />
      </label>

      <label class="form-group">
        Date de création
        <input v-model="form.createdAt" type="date" required />
      </label>

      <label class="form-group">
        Années d'expérience
        <input
          v-model.number="form.experience"
          type="number"
          min="0"
          required
        />
      </label>

      <p v-if="error" class="form-error">{{ error }}</p>

      <div class="form-actions">
        <RouterLink to="/" class="button button-ghost">
          Annuler
        </RouterLink>

        <button
          type="submit"
          class="button button-primary"
          :disabled="saving"
        >
          {{ saving ? 'Publication...' : 'Publier l’offre' }}
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { createJob } from '../services/jobs'

export default {
  data() {
    return {
      saving: false,
      error: '',
      form: {
        title: '',
        description: '',
        company: '',
        location: '',
        type: 'Stage',
        salary: 0,
        createdAt: new Date().toISOString().slice(0, 10),
        experience: 0
      }
    }
  },

  methods: {
    async submitJob() {
      this.saving = true
      this.error = ''

      try {
        await createJob(this.form)
        this.$router.push('/')
      } catch (error) {
        this.error = 'Erreur lors de la création de l’offre.'
        console.error(error)
      } finally {
        this.saving = false
      }
    }
  }
}
</script>
