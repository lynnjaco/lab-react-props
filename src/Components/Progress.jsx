import { donations } from "../App"

function calculateTotalDonations(donationsList){
  return donationsList.reduce((sum, donation) => sum + donation.amount, 0)
}

export default function Progress() {
  return (
      <section className="progress">
        <h2>
          Raised <span className="secondary">${ calculateTotalDonations(donations) }</span> of
          <span className="secondary">$1000</span>
        </h2>
      </section>
  )
}
