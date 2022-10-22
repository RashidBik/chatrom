<script>
    import Tab from "./components/Tab.svelte";
    import Footer from "./components/Footer.svelte";
    import Header from "./components/Header.svelte";
    import CurrentCity from "./components/CurrentCity.svelte";
    import AddCity from "./components/AddCity.svelte";

    let tabs = ['currentCities','addNewCity' ];
    let activeTab = 'currentCities';
    const toggle = (e) => {
        activeTab = e.detail.tab;
    }
</script>
<div class="">
    <Header />
     <Tab {tabs} {activeTab} on:toggleTabs={toggle} />
     {#if activeTab === 'currentCities' }
        <CurrentCity />
    {:else if activeTab === 'addNewCity'}
        <AddCity />
     {/if}
    <Footer />
</div>