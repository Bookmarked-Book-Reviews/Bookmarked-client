import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../../Components/Navbar/Navbar';
import Book from '../../Assets/images/BookLanding.jpg'
import './Home.css'


function Home() {
  return (
    <>
    <CssBaseline/>
     <div className="container">
            <div className="main-text">
                
                <h1>THE BEST WAY TO DISCOVER AND SHARE NEW BOOKS</h1>
                
                <p> Bookmarked is an online social book review and recommendation platform where you can find all the information you want from various categories such as new releases or best sellers. You can support your favorite author by giving your rating or writing a short review.</p>
               
                
              </div>

            
              <div className="picture">
                <img src={Book} alt="Books"/>
              </div>
            </div>
        

    </>
  );
}

export default Home;
