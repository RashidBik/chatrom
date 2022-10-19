<script>
    import { FeedbackStore } from "../Store";
 
$: count = $FeedbackStore.length;
$: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length;

</script>
<div>
    <h4>{count}</h4>
    <h4>Rating Average {average}</h4>
</div>