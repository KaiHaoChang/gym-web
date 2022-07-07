import React, {useContext} from 'react'
import { Box, Button, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'



const HorizontalScrollbar = ( {data,setExercises,exercises} ) => {

  const renderExercises = async (e) => {
    const search = e.target.innerHTML
    const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
    if(search && search !== 'all') {
      const searchedExercises = exerciseData.filter((exercise) => 
      exercise.name.toLowerCase().includes(search) ||
      exercise.target.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search) || 
      exercise.equipment.toLowerCase().includes(search)
      )      
      setExercises(searchedExercises)
    } else if (search === 'all') {
      setExercises(exerciseData)
    }
  }

  return (
    <Box >
      {data.map(item => {return(
        <Button 
          onClick = { (e) => renderExercises(e)}
          sx = {{
                backgroundColor:'#ff7725',
                color:'#000',
                margin:'10px',
              }}
        >
          <Typography fontSize='22px'>{item}</Typography>
        </Button>
      )})}
    </Box>

  )
}

export default HorizontalScrollbar

