<script>
    // import { Pane, Splitpanes } from 'svelte-splitpanes';
    import Eliza from "./components/Eliza.svelte";
    import Voice from "./components/Voice.svelte";
    const contacts = [
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'},
        {id: 'A', name: 'Ali'}, 
    ];
    let size;
    const handleResize = (e) => {
        size = e.clientx;
    }
</script>
<main class="container flex bg-slate-600 ">
    <div class="flex flex-col w-[30%] h-[100vh] resizable-content" on:resize={handleResize} >
        <header>
            <a href="#">Groups</a>
            <a href="#">Edits</a>
        </header>
        <main class="flex flex-col " >
            <div class="">
                <input type="search" placeholder="search" class="bg-gray-200">
            </div>
            <div class="flex">
                <div class="flex flex-col">
                {#each contacts as i}
                        <div class="border">{i.id}</div>
                {/each}
                </div>
                <div>
                    {#each contacts as v }
                        <div class="flex">
                            <div class="p-3 border rounded-full w-10 h-10"></div>
                            <p>{v.name}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </main>
    </div>
    <div class=" flex flex-col w-[100vw] " >
        <header>
            <a href="">More</a>
        </header>
        <main>
            <div>
                <img src="img.png" alt="profile-pic">
            </div>
            <div>videoCall voiceCall </div>
            <div class="bg-green-700">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </main>
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
    background: #ddd;
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