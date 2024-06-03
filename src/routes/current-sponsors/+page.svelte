<script>
    import { onMount } from 'svelte';
    import { read, utils, writeFileXLSX } from 'xlsx';

    /* the component state is an array of presidents */
    let sponsors = [    { ActiveSponsors: "Pecos Valley Telecomunications"}];

    /* Fetch and update the state once */
    onMount(async() => {
        const f = await (await fetch("https://hangar-84.monday.com/boards/4167895144.xlsx")).arrayBuffer();
        const wb = read(f); // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
        sponsors = utils.sheet_to_json(ws); // generate objects and update state
    });

    /* get state data and export to XLSX */
    function exportFile() {
        const ws = utils.json_to_sheet(sponsors);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        writeFileXLSX(wb, "Sponsors.xlsx");
    }
</script>
<svelte:head>
    <title>Current Sponsors | Hangar 84</title>
    <meta content="Current Sponsors | Hangar 84" property="og:title"/>
    <meta content="View the amazing sponsors who support Hangar 84's vision!" property="og:description"/>
    <meta content="https://hangar84.org/current-sponsors" property="og:url"/>
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<div class="flex flex-col items-center mt-8 mb-16">
    <div class="shrink text-center flex flex-col space-y-4">
        <h1 class="pb-3 text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 inline-block text-transparent bg-clip-text">
            Current Sponsors
        </h1>
        <div class="flex flex-col items-center mt-4 mb-8">
            <table><thead><tr><th class="text-xl">Active Sponsors</th></tr></thead><tbody>
            {#each sponsors as p}<tr>
                <td class="text-2xl font-bold bg-gradient-to-r from-green-600 via-green-600 to-green-600 inline-block text-transparent bg-clip-text">
                    {p.ActiveSponsors}
                </td>
            </tr>{/each}
            </tbody><thead><td>
                <button on:click={exportFile} class="text-2xl"><u class="pb-3 text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 inline-block text-transparent bg-clip-text">
                    Sponsors.xlsx
                </u></button>
            </td></thead></table>
        </div>
    </div>
</div>