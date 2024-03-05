"use client"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

async function getData() {
  const res = await fetch('https://melivecode.com/api/attractions')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

interface attraction{
  id:number,
  name:string,
  detail:string,
  coverimage:string,
  latitude:number,
  longitude:number
}


export const AttractionPage = async() => {
  const data = await getData()
  console.log(data)
  return (
    <>
      <Container fixed>
    <div>AttractionPage</div>
    <Grid container spacing={2}>
    {data.map((a:attraction)=>(
        <Grid item xs={12} md={4} key={a.id}>
          <Card>
            <CardMedia
        sx={{height:140}}
        image={a.coverimage}
        title= {a.name}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {a.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {a.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
         </Card>
      </Grid>
    ))}
    </Grid>

</Container>
    </>
  )
}
export default AttractionPage
