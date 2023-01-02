import React from 'react';

function Project({styles,src}) {
  return (
    <div className={styles}>

      <div className="">
        <h3 className="text-purpleText">Featured Project</h3>
        <h2>Example Project</h2>

        <div className="bg-transparency rounded-md p-4 backdrop-blur-md w-[80%] pl-7 ">
         <p className="">
            A web app for visualizing personalized Spotify data. View your
            top artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
        </p>
        </div>
      </div>  

      <div className="w-full">
      <img src={src} className="w-[80%] md:w-full"/>
      </div>   
    </div>
  );
}

export default Project;
