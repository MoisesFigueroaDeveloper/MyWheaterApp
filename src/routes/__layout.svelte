<div>
    <slot />
</div>

<style>
    :global(body) {
        display: grid;
        place-content: center;
        min-height: 100vh;
    }

    div {
        aspect-ratio: 16 / 9;
        max-width: 500px;
        width: 100%;
        border: 1px solid white;
        display: block;
    }

</style>