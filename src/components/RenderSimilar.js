import React from 'react'

import { Link } from 'react-router-dom'

const RenderSimilar = ({data}) => {
  return (
    data.slice(0,3).map(item=>{
      const { gifUrl, id, name } = item
      return (
        <Link style={{textDecoration:'none'}} className='exercise-card' to={`/exercise/${id}`}>
          <img src={gifUrl} alt={name} loading='lazy'/>     
        </Link>
      )
    })
  )
}

export default RenderSimilar


    // <Link style={{textDecoration:'none'}} className='exercise-card' to={`/exercise/${exercise.id}`}>
    //   <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
    //   <Stack direction='row'>
    //     <Button sx={{ml:'21px', color:'#fff', background:'#ffa9a9', fontSize:'14px', borderRadius:'20px',textTransform:'capitalize'}}>
    //       {exercise.bodyPart}
    //     </Button>
    //     <Button sx={{ml:'21px', color:'#fff', background:'#fcc757', fontSize:'14px', borderRadius:'20px',textTransform:'capitalize'}}>
    //       {exercise.target}
    //     </Button>
    //   </Stack>
    //   <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
    //     {exercise.name}
    //   </Typography>
    // </Link>
