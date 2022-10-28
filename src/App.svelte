<script>
    // import { Pane, Splitpanes } from 'svelte-splitpanes';
    import Eliza from "./components/Eliza.svelte";
    import NameList from "./components/NameList.svelte";
    import Profile from "./components/Profile.svelte";
    import Search from "./components/Search.svelte";
    import Sort from "./components/Sort.svelte";
    import Voice from "./components/Voice.svelte";

</script>
<main class="container flex ">
    <div class="flex flex-col w-[30%] h-[100vh] resizable-content" >
        <header class="flex justify-between">
            <a href="#">Groups</a>
            <a href="#">Edits</a>
        </header>
        <main class="flex flex-col " >
            <Search/>
            <div class="flex">
                <Sort />
                <NameList />
            </div>
        </main>
    </div>
    <div class=" flex flex-col w-[100vw] border-x" >
        <header class="flex justify-end">
            <a href="">More</a>
        </header>
        <Profile />
    </div>
</main>

<!-- <Splitpanes 
on:ready="{handleMessage}"
on:resize="{handleMessage}"
on:resized="{handleMessage}"
on:pane-click="{handleMessage}"
on:pane-maximize="{handleMessage}"
on:pane-add="{handleMessage}"
on:pane-remove="{handleMessage}"
on:splitter-click="{handleMessage}"
class="default-theme" style="height: 400px">
	<Pane minSize={20}>1<br /><em class="specs">I have a min width of 20%</em></Pane>
	<Pane>
		<Splitpanes class="default-theme" horizontal="{true}">
			<Pane minSize={15}>2<br /><em class="specs">I have a min height of 15%</em></Pane>
			<Pane>3</Pane>
			<Pane>4</Pane>
		</Splitpanes>
	</Pane>
	<Pane>5</Pane>
</Splitpanes> -->

<style>
  .resizable-content {
    resize: horizontal;
    overflow-y: auto;
}
  header {
    background: rgb(199, 107, 3);
    padding: 10px;
    
  }

  /* The following classes can be used to style the splitter, see demos*/

.splitpanes {
	background-color: #f8f8f8;
}

.splitpanes__splitter {
	background-color: #ccc;
	position: relative;
}
.splitpanes__splitter:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	transition: opacity 0.4s;
	background-color: rgba(255, 0, 0, 0.3);
	opacity: 0;
	z-index: 1;
}
.splitpanes__splitter:hover:before {
	opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
	left: -30px;
	right: -30px;
	height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
	top: -30px;
	bottom: -30px;
	width: 100%;
}
</style>