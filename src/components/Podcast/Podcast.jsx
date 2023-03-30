import './Podcast.css'


const Podcast = () => {


    return (
        <div id='podcast' className='podcast'>
            <h1>Podcast</h1>
            < iframe
                src="https://open.spotify.com/embed/show/02O5h9s0pdZ1z7ZM9R9zEz?theme=0"
                title="podcast"
                className='podcastBox'
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    )
}


export default Podcast