import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';

const cards=[1,2,3,4,5,6,7,8,9]

export default function App() {
    const classes=useStyles()

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon}/>
                    <Typography  variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align='center' color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align='center' color="textSecondery" paragraph>
                            hello everyone this is a photo album created by somebody no giving name
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant='contained' color="primary">
                                        See my photos
                                    </Button>
                                    </Grid>
                                    <Grid item>
                                    <Button variant='outlined' color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card)=>(<Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                 className={classes.cardMedia}
                                 image="https://source.unsplash.com/random"
                                 title="Image title"
                                 
                                 />
                                 <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                 </CardContent>
                                 <CardActions >
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                 </CardActions>
                            </Card>
                        </Grid>))}
                        
                        
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
                <Typography variant='subtitle1' align='center' color="secondary">This area for your extra informations</Typography>
            </footer>
        </>
    )
}
