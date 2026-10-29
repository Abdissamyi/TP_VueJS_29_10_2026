
<template>
  <section class="form-page">
    <RouterLink to="/" class="back-link">
      ← Retour aux offres
    </RouterLink>

    <p v-if="loading">Chargement...</p>
    <p v-else-if="error" class="form-error">{{ error }}</p>

    <form
      v-else-if="job"
      class="panel job-form"
      @submit.prevent="saveJob"
    >
      <h1>Modifier l'offre</h1>

      <label class="form-group">
        Titre
        <input v-model.trim="job.title" required />
      </label>

      <label class="form-group">
        Description
        <textarea v-model.trim="job.description" required></textarea>
      </label>

      <label class="form-group">
        Entreprise
        <input v-model.trim="job.company" />
      </label>

      <label class="form-group">
        Lieu
        <input v-model.trim="job.location" />
      </label>

      <label class="form-group">
        Type de contrat
        <select v-model="job.type">
          <option>Stage</option>
          <option>CDI</option>
          <option>CDD</option>
          <option>Freelance</option>
        </select>
      </label>

      <label class="form-group">
        Salaire (DH)
        <input v-model.number="job.salary" type="number" min="0" />
      </label>

      <label class="form-group">
        Date de création
        <input v-model="job.createdAt" type="date" required />
      </label>

      <label class="form-group">
        Années d'expérience
        <input
          v-model.number="job.experience"
          type="number"
          min="0"
          required
        />
      </label>

      <p v-if="error" class="form-error">{{ error }}</p>

      <div class="form-actions">
        <button
          type="button"
          class="button button-danger"
          @click="removeJob"
        >
          Supprimer
        </button>

        <button type="submit" class="button button-primary">
          Enregistrer
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { getJob, updateJob, deleteJob } from '../services/jobs'

export default {
  data() {
    return {
      job: null,
      loading: true,
      error: ''
    }
  },

  async mounted() {
    await this.loadJob()
  },

  watch: {
    '$route.params.id'() {
      this.loadJob()
    }
  },

  methods: {
    async loadJob() {
      this.loading = true
      this.error = ''

      try {
        this.job = await getJob(this.$route.params.id)
      } catch (error) {
        this.error = 'Impossible de charger cette offre.'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async saveJob() {
      try {
        const { id, ...data } = this.job

        await updateJob(id, data)
        this.$router.push('/')
      } catch (error) {
        this.error = 'Erreur lors de la modification.'
        console.error(error)
      }
    },

    async removeJob() {
      const confirmed = window.confirm(
        `Voulez-vous supprimer « ${this.job.title} » ?`
      )

      if (!confirmed) return

      try {
        await deleteJob(this.job.id)
        this.$router.push('/')
      } catch (error) {
        this.error = 'Erreur lors de la suppression.'
        console.error(error)
      }
    }
  }
}
</script>
