import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'
function MyInfo(){
    const firstName='Saurabh';
    const lastName='Umadikar';
    const date=new Date();
    let no=date.getHours();
    let currentTime
    if(no < 12){
        currentTime="Night"
    }
    else if(no > 12 && no<18){
        currentTime="Afternoon"
    }
    else {
     currentTime="Night"
    }

    return(
        <div>
            <h1>{'Good'+currentTime+' '+firstName +' '+lastName}</h1>
            <main>
            <Header/>
            <MainContent/>
            <Footer></Footer>
            </main>
        </div>
    )
}
export default MyInfo