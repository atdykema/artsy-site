<script>
    //export let id, path, data, currentArticle
    export let data, currentArticle

</script>

<style>
    *{
        margin: 20px 20px 20px 20px;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: whitesmoke;
        font-size: 2rem;
    }

    .article-body{
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 90%;
        justify-content: space-evenly;
        overflow: hidden;
    }

    .article-back-button{
        display: flex;
        width: 100%;
        height: 25px;
    }

    .article-body-inner{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
        width: 100%;
        
    }
    
    .article-left{
        display: flex;
        height: 40%;
        justify-content: center;
    }

    .article-right{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 60%;
        margin: 0;
        justify-content: start;
        text-align: center;

        
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        overflow-x: hidden; /* Hide horizontal scrollbar */
        
    

    /* Hide scrollbar for Chrome, Safari and Opera */
    }

    *::-webkit-scrollbar {
        display: none;
    }
    
    .back-button{
        animation: blink 5s infinite;
        opacity: 0%;
    }

    .back-button:hover{
        -webkit-filter: invert(80%); /* Safari/Chrome */
        filter: invert(80%);

    }

    @keyframes blink{
        0%{
            filter:invert(0%);
            opacity: 0%;
        }
        50%{
            filter:invert(80%);
            opacity: 75%;
        }
        100%{
            filter:invert(0%);
            opacity: 0%;
        }
    }

</style>

<div class="article-body">
    
    <div class="article-body-inner">
        <div class="article-left">
            <iframe style="border-radius:12px;" title="spotify embed" src={data.embed_link} width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div style="text-align: center;" id='rg_embed_link_{data.desc_link}' class='rg_embed_link' data-song-id={data.desc_link}><a href={data.genius_link}>{data.title} by {data.artist}</a></div> <script crossorigin src='//genius.com/songs/{data.desc_link}/embed.js'></script>
        {#if data.desc != ""}

        <div class="article-right">
            
            {data.desc}
            
        </div>
        {/if}
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="article-back-button" on:click={() => {currentArticle = -1 * Math.random()}}>
        <img class="back-button" alt="back-button" src="/images/arrow.png" width="25" length="200">
    </div>
    
</div>