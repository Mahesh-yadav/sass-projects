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
                const categories = this.jobCategories(job);

                for(let filter of this.filters){
                    if(!categories.includes(filter)){
                        return false;
                    }
                }

                return true;
            });
        }
    },
    methods: {
        jobCategories(job){
            return [job.role, job.level].concat(job.languages, job.tools);
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