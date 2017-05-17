<template lang="html">
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          List of projects:
        </div>
        <div class="">
          <table class="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Assigned To</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in projects">
                <td>{{project.name}}</td>
                <td>{{project.is_internal}}</td>
                <td>{{project.is_active}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data: function () {
    return {
      projects: []
    }
  },
  methods: {
    loadProjects: function () {
      this.$http.get('http://127.0.0.1:8000/api/project/', {
        headers:
        {
          'Authorization': 'Token ' + '535e7fe61707eae95f933558508690dbbb49115c'
        }
      }).then(function (response) {
        this.projects = response.data
      })
    }
  },
  mounted: function () {
    this.loadProjects()
  }
}

</script>
