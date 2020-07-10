import jobsData from './jobsData.js'

new Vue({
    el: '#app',
    data: {
        jobs: jobsData
    },
    methods: {
        jobCategories(job){
            return [job.role, job.level].concat(job.languages, job.tools);
        }
    }
}); 