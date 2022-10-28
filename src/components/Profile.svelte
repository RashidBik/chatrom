<script>
    import {people} from '../../store';
    import Eliza from './Eliza.svelte';
    // const isFavourite = () => {
    //     people.update((currentFav) => {
    //         people = [...people, currentFav]
    //     })
    // }


</script>
{#each people as person }
    {#if person.id === 1}
        <main>
            <div class="bg-blue-400 h-40 relative md:overflow-hidden md:h-60">
                <div class=" flex flex-col justify-between bg-[url('public/profile.jpg')] bg-cover bg-center w-full h-full">
                    <div class="flex justify-between px-4 text-lg font-black  ">
                        <div class="text-white italic ">{person.name}</div>
                        <div class:yellow={person.favourite} class="cursor-pointer text-gray-300" on:click={()=> update( person.favourite = true)}>&star;</div>
                    </div>
                    <div class="text-center text-lg font-bold underline text-white">&lagran; {person.bio} &gamma; </div>
                </div>
            </div>
            <div class="border-b">
                <a href="/" class="px-2 border-r">Message</a>
                <a href="/" class="px-2 border-r">Voice</a>
                <a href="/" class="px-2 border-r">Video</a>
            </div>
            <div class="bg-gray-300 w-full h-full">
                <Eliza />
            </div>
        </main>
    {/if}   
{/each}

<style>
    .yellow {
        color:yellow;
    }
</style>