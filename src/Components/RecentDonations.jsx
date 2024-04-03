export default function RecentDonations( { donations } ) {
  return(
    <section>
      <h2>Recent Donations</h2>
      <ul>
        { donations.map((donation) => 
        <li><span>{ donation.name } donated ${ donation.amount }</span>{ donation.caption}</li>)}   
      </ul>
    </section>
  )
}
