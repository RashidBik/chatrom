<script>
    import { onDestroy, onMount } from "svelte";
    import FeedbackForm from "./lib/FeedbackForm.svelte";
    import FeedbackList from "./lib/FeedbackList.svelte";
    import FeedbackStat from "./lib/FeedbackStat.svelte";
    import { FeedbackStore } from "./Store";

</script>
<main>
  <FeedbackForm />
  <FeedbackStat />
 <FeedbackList  />

</main>
<style>

</style>
