<script>
    import { getWeatherFrom } from '../services/weather.js';
    import additionalInfo from '../components/additionals-info.svelte';
	import AdditionalsInfo from '../components/additionals-info.svelte';
    const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
    <section>
        <h1>{weather.locationName}</h1>
        <h2>{weather.temperature}°</h2>
        <h3>Humidity {weather.humidity}%</h3>
        <h4>{weather.country}</h4>
        <h5>{weather.conditionsText}</h5>
    </section>
    <AdditionalsInfo />
{/await}

<style>
    section{
        padding: 16px;
    }

    h1 {
        font-weight: 300;
        color: black;
        text-transform: uppercase;
        padding: 16px 0 16px 16px;

    }

    h2{
        font-weight: 300;
        font-size: 64px;
        color: black;
        text-transform: uppercase;
        padding: 16px 0 16px 16px;
    }

    h3{
        color: black;
        padding: 8px 0 8px 16px;
    }

    h4 {
        font-weight: 400;
        transform: rotate(-90deg);
        position: absolute;
        top: 48px;
        right: 12px;
    }

    h5{
        color: black;
        padding: 8px 0 8px 16px;
    }

</style>
