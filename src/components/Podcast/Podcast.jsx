import styled from 'styled-components'


const Podcast = () => {

    const Podcast = styled.div`
    height: 300px;
    background-color: var(--color-podcast-light);
    `

    const SpotifyWidget = styled.iframe`
    width: 1000px;
    height: 279px;
    border-radius: 12px;
    `


    return (
        <Podcast id='podcast'>
            <h2>Podcast</h2>

            < SpotifyWidget
                src="https://open.spotify.com/embed/show/02O5h9s0pdZ1z7ZM9R9zEz?theme=0"
                title="podcast"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></SpotifyWidget>
        </Podcast>
    )
}

export default Podcast