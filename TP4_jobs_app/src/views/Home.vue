
<template>
  <section>
    <div class="hero">
      <p class="eyebrow">VOTRE PROCHAINE OPPORTUNITÉ</p>
      <h1>Trouvez le poste qui vous correspond.</h1>
      <p>Découvrez les offres et faites avancer votre carrière.</p>

      <RouterLink to="/add" class="button button-primary">
        Publier une offre
      </RouterLink>
    </div>

    <div class="section-heading">
      <h2>Offres disponibles ({{ filteredJobs.length }})</h2>
    </div>

    <FilterNav
      v-model:search="search"
      v-model:type="selectedType"
    />

    <p v-if="loading">Chargement des offres...</p>
    <p v-else-if="error" class="state-error">{{ error }}</p>

    <div v-else-if="filteredJobs.length" class="jobs-grid">
      <JobDetail
        v-for="job in filteredJobs"
        :key="job.id"
        :job="job"
      />
    </div>

    <p v-else>Aucune offre trouvée.</p>
  </section>
</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import JobDetail from '../components/JobDetail.vue'
import { getJobs } from '../services/jobs'

export default {
  components: {
    FilterNav,
    JobDetail
  },

  data() {
    return {
      jobs: [],
      loading: true,
      error: '',
      search: '',
      selectedType: ''
    }
  },

  computed: {
    filteredJobs() {
      const query = this.search.toLowerCase().trim()

      return this.jobs.filter(job => {
        const text = [
          job.title,
          job.company,
          job.location,
          job.description
        ].join(' ').toLowerCase()

        const matchesSearch = text.includes(query)
        const matchesType =
          !this.selectedType || job.type === this.selectedType

        return matchesSearch && matchesType
      })
    }
  },

  async mounted() {
    try {
      this.jobs = await getJobs()
    } catch (error) {
      this.error = 'Impossible de charger les offres.'
      console.error(error)
    } finally {
      this.loading = false
    }
  }
}
</script>
