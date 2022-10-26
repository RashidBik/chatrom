<script>
    import { onMount } from "svelte";


    let voices = [];
    let rate = 1;
    let pitch = 1;
    let volume = 1;
    let text = 'Hello Voice'; // bind to say somthing
    let selectedVoice;


    onMount(() => {
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            selectedVoice = voices[0];
        };
    });
const printVoice = (voice) => {
        if (!voice) {
            return "no voice system available";
        }
        return `${voice.name} (${voice.lang})`;
    };
const play = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel();
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.voice = selectedVoice;
    utterance.volume = volume;
    speechSynthesis.speak(utterance);
}
</script>

<div>
    <div>
        <input type="text" bind:value={text}>
    </div>
    <select name="" id="" bind:value={selectedVoice}>
        {#each voices as voice}
            <option value={voice.name}>{ voice != null ? printVoice(voice) : 'unknown' }</option>
        {/each}
    </select>
    <div>
    Range    <input type="range" bind:value={pitch} min="1" max="2" step="0.1">
    </div>
    <div>
    Rate    <input type="range" bind:value={rate} min="0.1" max="2" step="0.1">
    </div>
    <div>
    Volume   <input type="range" bind:value={volume} min="0.1" max="1" step="0.1">
    </div>
    <button on:click={play}>play</button>
    <div>
        pitch: {pitch} | Speed: {rate} | Volume: {volume} | Voice: {printVoice(selectedVoice)}
    </div>
</div>