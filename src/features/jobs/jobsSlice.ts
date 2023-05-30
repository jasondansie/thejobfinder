import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Job {
  id: string;
  title: string;
  flag: string;
  name: string;
}

interface JobsState {
  jobs: Job[];
  isLoading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  isLoading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  try {
    console.log("getting countries");
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data = response.data;
    console.log("data", data);
    // Modify the data as needed to extract the job information
    const jobs: Job[] = data.map((country: any) => ({
      id: country.alpha3Code,
      title: country.name.common,
      flag: country.flag,
    }));

    return jobs;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch jobs';
      });
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
