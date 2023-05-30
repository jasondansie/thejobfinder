import { createSlice } from "@reduxjs/toolkit";
import jobsService from '../../services/jobs'


export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        isLoading: true,
    },

    reducers: {
        getJobs(state, action) {
            state.jobs = action.payload
        },
        isLoading(state, action){
            state.isLoading = action.payload
        }

    }   
})

export const initializeJobs = () => {
    return async (dispatch) => {
        const jobs = await jobsService.getall();
        dispatch(getJobs(jobs));
        dispatch(isLoading(false))
    }
}

export const {getJobs, isLoading} = jobsSlice.actions;
export default jobsSlice.reducer;