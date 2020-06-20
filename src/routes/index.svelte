<script>
  import { onMount } from "svelte";

  let members;
  let Key = "KJWRFSERGWerDSWFWeoriwoWODESTRgSWDF:456787654Vjhved"; //process.env.KEY;
  let alliance_name = 'tiger-team1';
  let URL = 'https://am4-api.netlify.app/.netlify/functions/am4-alliance-api'

  onMount(async () => {
    const res = await fetch(URL, { method: 'GET', cors: "no-cors" });
    const data = await res.json();
    members = data.members;
    window.scrollTo(0, 0);
  })
</script>
<style>
  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<main>
  <h2 class="is-size-3">Tiger Team1</h2>
  {#if members}
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Company</th>
          <th>Share Value</th>
          <th>Flights</th>
          <th>Contribution</th>
        </tr>
      </thead>
      <tbody>
        {#each members as member}
          <tr>
            <th>{member.company}</th>
            <td>${member.shareValue}</td>
            <td>{member.flights}</td>
            <td>${member.contributed}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>LOADING...</p>
  {/if}
</main>
