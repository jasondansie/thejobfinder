import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseurl = 'https://restcountries.com/v3.1/all'

export const getJobs = createAsyncThunk('jobs/getJobs', async () => {
    console.log("getting data");
    // Perform async operation to fetch jobs
    const response = await axios.get(baseurl);
    const data = await response.data;
    console.log("data", data)
    return data;
  });
