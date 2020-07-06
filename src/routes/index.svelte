<script>
  import { onMount } from "svelte";
  import res from '../../static/start.json';
  import getFauna from './_getFauna.js';

  let members
  let current
  onMount(async () => {
    const data = await JSON.parse(JSON.stringify(res));
    current = await getFauna(() => current)
    members = await data.members.sort((a, b) => {
      let nameA = a.company.toUpperCase();
      let nameB = b.company.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
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
          <th>Start Contribution</th>
          <th>Current Contribution</th>
          <th>Raw</th>
          <th>Growth</th>
        </tr>
      </thead>
      <tbody>
        {#each members as member,i}
          <tr>
            <th>{member.company}</th>
            <td>${member.shareValue}</td>
            <td>{member.flights}</td>
            <td>{member.contributed.toLocaleString('en-US',{style: 'currency', currency: 'USD',})}</td>
            <td>{current[i].contributed.toLocaleString('en-US',{style: 'currency', currency: 'USD',})}</td>
            <td>{((current[i].contributed - member.contributed)/member.contributed)}</td>
            <td>{((current[i].contributed - member.contributed)/current[i].contributed)*100}%</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>LOADING...</p>
  {/if}
</main>