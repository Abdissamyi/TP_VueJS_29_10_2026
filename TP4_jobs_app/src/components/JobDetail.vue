
<template>
  <article class="job-card">
    <div class="job-card-top">
      <div class="company-avatar">{{ initials }}</div>

      <span class="badge">
        {{ job.type }}
      </span>
    </div>

    <h2>{{ job.title }}</h2>
    <p class="company-name">{{ job.company }}</p>

    <div class="job-meta">
      <span>{{ job.location }}</span>
      <span>{{ job.experience }} an(s) d'expérience</span>
    </div>

    <p class="job-description">
      {{ job.description }}
    </p>

    <div class="job-card-bottom">
      <div>
        <strong>{{ formatSalary(job.salary) }}</strong>
        <p class="created-date">
          Publié le {{ job.createdAt }}
        </p>
      </div>

      <RouterLink
        :to="`/jobs/${job.id}`"
        class="button button-outline"
      >
        Détails →
      </RouterLink>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },

  computed: {
    initials() {
      return (this.job.company || 'J')
        .split(' ')
        .slice(0, 2)
        .map(word => word[0])
        .join('')
        .toUpperCase()
    }
  },

  methods: {
    formatSalary(value) {
      return Number(value).toLocaleString('fr-FR') + ' DH'
    }
  }
}
</script>
