import { configureStore } from '@reduxjs/toolkit'
import configSlice  from './configSlice'
import React from 'react';

export default configureStore({
  reducer: {config: configSlice},
})
