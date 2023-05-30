import { configureStore } from '@reduxjs/toolkit';
import jobsSlice from './features/jobs/jobsSlice';

export default configureStore({
  reducer: {
    jobs: jobsSlice,
  },
});