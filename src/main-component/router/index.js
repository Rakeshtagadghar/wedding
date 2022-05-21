import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
// import Homepage2 from '../HomePage2'
// import HomePage3 from '../HomePage3';
// import HomePage4 from '../HomePage4';
// import HomePage5 from '../HomePage5';
// import HomePage6 from '../HomePage6';
// import TeamSinglePage from '../TeamSinglePage'
// import AboutPage from '../AboutPage'
// import StoryPage from '../StoryPage'
// import AccomodationPage from '../AccomodationPage'
// import RSVPPage from '../RSVPPage'
// import GalleryPage from '../GalleryPage'
// import PlannerPage from '../PlannerPage'
// import BrideGroomPage from '../BrideGroomPage'
// import PortfolioGridPage from '../PortfolioGridPage'
// import PortfolioMasonaryPage from '../PortfolioMasonaryPage'
// import ShopPage from '../ShopPage'
// import CheckoutPage from '../CheckoutPage'
// import CartPage from '../CartPage'
// import OrderRecived from '../OrderRecived'
// import ProjectSinglePage from '../ProjectSinglePage'
// import BlogPage from '../BlogPage'
// import BlogPageLeft from '../BlogPageLeft'
// import BlogPageFullwidth from '../BlogPageFullwidth'
// import BlogDetails from '../BlogDetails'
// import BlogDetailsFull from '../BlogDetailsFull'
// import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
// import ErrorPage from '../ErrorPage'  
// import ContactPage from '../ContactPage' 
// import ProductSinglePage from '../ProductSinglePage'
// import ServicePage from '../ServicePage'
// import SeviceSinglePage from '../SeviceSinglePage'
// import PricingPage from '../PricingPage'
// import ComingSoonPage from '../ComingSoonPage'
// import LoginPage from '../LoginPage' 
// import SignUpPage from '../SignUpPage' 
// import ForgotPassword from '../ForgotPassword' 
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            {/* <Route path='/home' component={Homepage} />
            <Route path='/home2' component={Homepage2}/>
            <Route path='/home3' component={HomePage3}/>
            <Route path='/home4' component={HomePage4}/>
            <Route path='/home5' component={HomePage5}/>
            <Route path='/invitation' component={HomePage6}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='/about' component={AboutPage} />
            <Route path='/story' component={StoryPage} />
            <Route path='/accomodation' component={AccomodationPage} />
            <Route path='/rsvp' component={RSVPPage} />
            <Route path='/gallery' component={GalleryPage} />
            <Route path='/planner' component={PlannerPage} />
            <Route path='/groom-bride' component={BrideGroomPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/coming' component={ComingSoonPage} />
            <Route path='/portfolio-grid' component={PortfolioGridPage}/>
            <Route path='/portfolio-masonary' component={PortfolioMasonaryPage}/>     
            <Route path='/shop' component={ShopPage} />
            <Route path='/service' component={ServicePage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/order_received' component={OrderRecived}/>
            <Route path='/product-single/:id' component={ProductSinglePage}/>
            <Route path='/team-single/:id' component={TeamSinglePage}/>
            <Route path='/project-single/:id' component={ProjectSinglePage}/>
            <Route path='/service-single/:id' component={SeviceSinglePage}/>
            <Route path='/404' component={ErrorPage}/>
            <Route path='/contact' component={ContactPage}/> 
            <Route path='/blog-single/:id' component={BlogDetails}/> 
            <Route path='/blog-single-left-sidebar/:id' component={BlogDetailsLeftSiide}/> 
            <Route path='/blog-single-fullwidth/:id' component={BlogDetailsFull}/> 
            <Route path='/blog' component={BlogPage}/> 
            <Route path='/blog-left-sidebar' component={BlogPageLeft}/>
            <Route path='/blog-fullwidth' component={BlogPageFullwidth}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={SignUpPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>  */}
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
