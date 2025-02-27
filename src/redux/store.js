import { configureStore } from '@reduxjs/toolkit'
import stopWatchReducer from '../feature/watch/WatchSlice'

export const store = configureStore({
    reducer: { 
        stopwatch: stopWatchReducer
    },
})