import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../Components/Navbar/Navbar';
import Book from '../../Assets/images/BookLanding.jpg'


function Home() {
  return (
    <>
    <CssBaseline/>
     <Navbar/>
     <Container width="100%">
        <Grid container spacing={3} justify="flex-start"  direction="row">
          <Grid item sm={6} >
            <Container maxWidth="sm">
                <Typography variant='h3'align='left'color='textPrimary'>
                THE BEST WAY TO DISCOVER AND SHARE NEW BOOKS
                </Typography>
                <Typography variant='subtitile1'color='textSecondary'>
                Bookmarked is an online social book review and recommendation platform where you can find all the information you want from various categories such as new releases or best sellers. You can support your favorite author by giving your rating or writing a short review.
                </Typography>
            </Container>
            </Grid>

            <Grid item sm={6}>
              <figure>
                <img src={Book} alt="Books" width="50%" height="50%"/>
              </figure>
            </Grid>
        </Grid>
     </Container>

    </>
  );
}

export default Home;
