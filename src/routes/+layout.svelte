<div>
    <slot />
</div>

<style>
    :global(body) {
        background: #fdfdfd;
        display: grid;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
        place-content: center;
        margin: 0;
        min-height: 100vh;
    }

    :global(h1, h2, h3, h4, h5){
        margin: 0;
    }

    div {
        aspect-ratio: 9 / 16;
        width: 350px;
        max-width: 100%;
        border: 1px solid white;
        display: block;
        box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1); /* Corregir la sintaxis de box-shadow */
        border-radius: 8px;
        position: relative;
    }
</style>
