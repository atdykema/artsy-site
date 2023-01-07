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
        animation: fadeIn .25s ease-in-out;
        width: 100%;
        height: 100%;
    }

    .nav-item:hover > a{
        animation: fadeOut .25s ease-in-out;
        opacity: 50%;
    }

    .nav-item:hover > .li-overlay{
        opacity: 50%;
        transform: translate(0%);
    }

    .nav-item{
        text-decoration: none;
        list-style: none;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: flex-end;
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
        color: whitesmoke;
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

    .li-overlay{
        position: absolute;
        opacity: 0%;
        height: 0;
        background-color: rgb(51, 51, 51);
        transition: .25s ease-in-out;
        transform: translate(-50px);
        color: transparent;
        padding: 1px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

    @keyframes fadeOut{
        0%{
            opacity: 100%;
        }
        100%{
            opacity: 50%;
        }
    }

    @keyframes fadeIn{
        0%{
            opacity: 50%;
        }
        100%{
            opacity: 100%; 
        }
    }

</style>

<div class="main-container">
    <div class="main-nav-container">
        <div class="main-nav-body" transition:fade|local={{duration: 500}}>
            <div class="nav-logo">
                logo
            </div>
            <ul class="nav-links">
                <div class="nav-item">
                    <div class="li-overlay">Promos</div>
                    <a href="">Promos</a>
                </div>
                <div class="nav-item">
                    <div class="li-overlay">New Arrivals</div>
                    <a href="">New Arrivals</a>
                </div>
                <div class="nav-item">
                    <div class="li-overlay">About</div>
                    <a href="">About</a>
                </div>
            </ul>
        </div>
        
    </div>
    
    <slot></slot>

</div>