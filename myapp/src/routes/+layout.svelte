<script>
    import { fade } from 'svelte/transition'
</script>

<style>

    @font-face{
        font-family: main-font;
        src:url(fonts/acid.otf);
    }

    *{
        font-family: main-font;
    }

    a{
        text-decoration: none;
        color: whitesmoke;
    }

    li{
        text-decoration: none;
        list-style: none;
    }

    .main-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 100%;
        
    }

    .main-nav-container{
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        padding: 0;
        position: fixed;
        width: 100%;
        height: 10vh;
        z-index: 100;
        font-size: 1.5rem;
    }

    .main-nav-container:hover > .main-nav-body{
        height: 10vh;
        opacity: 75%;
        transition: .5s ease-in-out;
    }

    .main-nav-body{
        display: grid;
        opacity: 0;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        color: azure;
        height: 0;
        transition: .5s ease-in-out;
    }

    .nav-logo{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        grid-column-start: 0;
        grid-column-end: 2;
    }

    .nav-links{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        grid-column-start: 3;
        grid-column-end: 6;
        padding: 0;
    }

</style>

<div class="main-container">
    <div class="main-nav-container">
        <div class="main-nav-body" transition:fade|local={{duration: 500}}>
            <div class="nav-logo">
                logo
            </div>
            <ul class="nav-links">
                <li>
                    <a href="">Promos</a>
                </li>
                <li>
                    <a href="">New Arrivals</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
            </ul>
        </div>
        
    </div>
    
    <slot></slot>

</div>