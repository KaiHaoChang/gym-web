import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import RenderSimilar from './RenderSimilar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercisesData}) => {
  console.log(equipmentExercisesData)
  return (
    <Box sx={{ mt:{lg:'100px', xs:'0'}}}>
      <Typography variant='h3'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? <RenderSimilar data={targetMuscleExercises}/>
         : <Loader />}
      </Stack>
      <Typography variant='h3'>
        Exercises that equip the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {equipmentExercisesData.length ? <RenderSimilar data={equipmentExercisesData}/>
         : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises