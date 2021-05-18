import './Home.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from '../../Components/Navbar/Navbar';
import Book from '../../Assets/images/BookLanding.jpg'


function Home() {
  return (
    <div style={{backgroundColor:'white'}}>
    <CssBaseline/>
     <Navbar/>
     <Container>
     <Container maxWidth="sm">
      <Typography variant='h3'align='left'color='textPrimary'>
       THE BEST WAY TO DISCOVER AND SHARE NEW BOOKS
      </Typography>
      <Typography variant='subtitile1'color='textSecondary'>
       Bookmarked is an online social book review and recommendation platform where you can find all the information you want from various categories such as new releases or best sellers. You can support your favorite author by giving your rating or writing a short review.
      </Typography>
     </Container>
     <figure>
     <img src={Book} alt="Books"width='50vh' height='50vh'/>
     </figure>
     </Container>


    </div>
  );
}

export default Home;
