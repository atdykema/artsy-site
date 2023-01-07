<script>
    export let path
</script>

<style>
    .main-container{
        flex: 1;
        height: 100%;
        display: flex;
        overflow: hidden;
        margin: 0;
        align-items: center;
        justify-content: center;
        transition: .25s ease-in-out;
        flex-direction: column;
        background-position: center;
        background-size:cover;
        background-repeat: no-repeat;
        
    }

    .main-container:hover {
        flex: none;
        width: 20vw;
    }

    .main-container:hover > .main-container-inner{
        opacity: 100%;
    }
    

    .main-container-inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: .25s ease-in-out;
        opacity: 0%;
    }
    
</style>

<div class="main-container" style="background-image: url({path});">
    <div class="main-container-inner">
        <h1>Title</h1>
        <div>blurb</div>
    </div>
    
</div>