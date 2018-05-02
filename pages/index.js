// In Next.JS, all pages are React Components
import React from 'react';
import 'isomorphic-fetch' /* So fetch works in the server and the browser */
   
// Next.JS is getting the latest posts from Hacker News 
// and injecting it into our component’s props in this.props.items 
// so we can use them in our app.

export default class extends React.Component {
     static async getInitialProps() {
       const req = await fetch(`https://api.hackerwebapp.com/news`)
       const stories = await req.json()
       return { stories }
     }
     render() {
       return <div>
     <h1>Latest News</h1>
 
     { this.props.stories.map((story) => (
       <h2><a href={ story.url }>{ story.title }</a></h2>
     )) }
 
     <style jsx>{` /* Your Page’s CSS */ `}</style>
     <style global jsx>{` /* Your Global CSS */ `}</style>
   </div>
    } 
} 