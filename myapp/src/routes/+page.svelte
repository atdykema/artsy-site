<script>
    import { fade } from 'svelte/transition'
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import HeroCard from '../lib/components/HeroCard.svelte';

    const articles = [
        {path: '/images/quantum.jpg', id:'0', article_link: 'www.google.com'},
        {path: '/images/earth.jpg', id:'1', article_link: 'www.google.com'},
        {path: '/images/milky-way.png', id:'2', article_link: 'www.google.com'},
        {path: '/images/mountains.jpg', id:'3', article_link: 'www.google.com'},
        {path: '/images/apple.png', id:'4', article_link: 'www.google.com'}
    ]

    let currentArticle = 0

</script>

<style>

    *{
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    *::-webkit-scrollbar {
        display: none;
    }

    .main-hero-container{
        display: flex; 
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        
    }

    .main-inner{
        display: grid;
        position: absolute;
        grid-template-columns: repeat(12, 1fr);
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background-size: cover;
        background-position: center;
        justify-content: center;
        transition: .5s ease-in-out;
        align-items: center;
        
        
    }

    .main-hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-size: cover;
        grid-column-start: 4;
        grid-column-end: 12;
        grid-row-start: 3;
        grid-row-end: 11;
        -webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
        backdrop-filter: blur(8px); /* Chrome and Opera */
        box-shadow: 0px 10px 15px 10px rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.15); 
        animation: ani 3s;
        color: white;
        z-index: 102;
        border: 1px solid transparent;
    }

    .main-article-list{
        display: flex;
        flex-direction: column;
        grid-column: span 3;
        z-index: 101;
    }

    .main-article-list-inner{
        display: block;
        height: 80vh;
        overflow-y: scroll;
    }

    .main-inner-layer{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background: none;
        justify-content: center;
        align-content: center;

    }

    .main-inner-mask{
        background: rgb(0,0,0);
        background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046219171262255) 50%, rgba(0,0,0,1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046219171262255) 50%, rgba(0,0,0,1) 100%);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046219171262255) 50%, rgba(0,0,0,1) 100%);
    }

    .main-body-container{
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100%;
        background-color: black;
        background-image: url(/images/layered-waves-downwards2.svg);
        background-repeat: no-repeat;
        background-size: cover;
        
    }

    .main-body{
        display: flex;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
    }

    .inner-hero{
        display: flex;
        animation: afterAni 2s;
        width: 100%;
        height: 100%;
        overflow-x: scroll;
        
    }

    @keyframes ani {
        0%{
            border: rgb(212, 212, 212) 1px solid;
            width: 0px;
            height: 0px;
        }
        25%{
            width: 1px;
            height: 100%;
        }
        50%{
            width: 100%;
            height: 100%;
        }
        75%{
            height: 100%;
            width: 100%;
            border: rgb(212, 212, 212) 1px solid;
        }
        100%{
            border: transparent 1px solid;
        }
    }

    @keyframes afterAni{
        0%{
            opacity: 0%;
            height: 0;
        }50%{
            opacity: 0%;
            height: 0;
        }100%{
            height: 100%;
            opacity: 100%;
        }
    }


</style>

<div class="main-hero-container">

    {#key currentArticle}
        <div class="main-inner" style="background-image: url({articles[currentArticle].path});" in:fade|local={ {duration: 1000, delay: 1500}} out:fade|local={ {duration: 1000, delay: 500}}></div>
    {/key}

    <div class="main-inner-layer main-inner-mask"></div>

    <div class="main-inner-layer grid">
        {#key currentArticle}
            <div class="main-hero" out:fade|local={{duration: 500}}>
                <div class="inner-hero">
                    {#each articles as {path}}
                        <HeroCard path={path}></HeroCard>
                        <HeroCard path={path}></HeroCard>
                        <HeroCard path={path}></HeroCard>
                    {/each}
                </div>
            </div>
        {/key}
    </div>

    <div class="main-inner-layer">
        <div class="main-article-list">
            <div class="main-article-list-inner">
                {#each articles as {path, id, article_link}}
                    <ArticleCard bind:currentArticle={currentArticle} path={path} id={id} article_link={article_link} ></ArticleCard>
                {/each}
            </div>        
        </div>
    </div>
</div>

<div class="main-body-container">
    <div class="main-body">
        
    </div>

</div>