import jobsData from './jobsData.js'

new Vue({
    el: '#app',
    data: {
        jobs: jobsData,
        filters: []
    },
    computed: {
        filteredJobs(){
            if(this.filters.length === 0){
                return this.jobs;
            }

            return this.jobs.filter((job) => {
                const categoriesLowercase = this.jobCategories(job).map((c) => c.toLowerCase());
                const filteredLowercase = this.filters.map((f) => f.toLowerCase());

                if(filteredLowercase.every((filter) => categoriesLowercase.includes(filter))){
                    return true;
                }

                return false;
                
            });
        }
    },
    methods: {
        jobCategories(job){
            return [job.role, job.level, ...job.languages, ...job.tools]
        },
        addFilter(filter){
            if(!this.filters.includes(filter)){
                this.filters.push(filter);
            }
        },
        removeFilter(filter){
            this.filters = this.filters.filter((f) => f !== filter);
        }
    }
}); 