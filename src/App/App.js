import './App.css';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';
import Draw from '../components/Draw';
import Block1 from '../components/Block1';
import Block2 from '../components/Block2';
import block4 from '../components/block4';
import Block5 from '../components/Block5';
import Block6 from '../components/Block6';
import Block7 from '../components/Block7';
import Footer from '../components/Footer';


function App() {
  return (
    <div className="App">
     <>
    
     <Grid item lg={12}item  container spacing={1} ><Block1 />


     <Grid item lg={12} sm={12} xs={12}> 
     <Header />
   
     <Block6 />

     <Block5 />
     <Block7 />
     <Footer />
      </Grid>
    



       </Grid>
     
       <Grid item lg={6} sm={12} xs={12}></Grid>
       <Grid item lg={6} sm={12} xs={12}></Grid>

    

     </>
    
    </div>
    
  );
}

export default App;
