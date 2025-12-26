import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";
import { image } from "../../constants/images";

function Features() {
  return (
    <section className="features">
      <h2>
        Building Trust, One <br />
        Contribution at a Time
      </h2>

      <div className="features-grid">
        <FeatureCard
          dark
          title="Group Creation"
          text="Set up your savings circle with custom rules, roles, and cycles in minutes."
          icon={<span><img src={image.group}></img></span>}
        />

        <FeatureCard
          title="Contribution Tracker"
          text="See who paid, how much, and when in real-time transparency for everyone."
          icon={<span><img src={image.contribution}></img></span>}
        />

        <FeatureCard
          title="Payout Scheduler"
          text="Automatically assign turns or let the group vote on payouts."
          iicon={<span><img src={image.timer}></img></span>}
        />

        <FeatureCard
          title="USSD & Mobile Money"
          text="Contribute and track via MTN or Airtel even on feature phones."
          icon={<span><img src={image.ussd}></img></span>}
        />

        <FeatureCard
          title="Notifications & Alerts"
          text="Get SMS or USSD reminders for contributions, missed payments, and payouts."
          icon={<span><img src={image.notification}></img></span>}
        />

        <FeatureCard
          title="Offline Mode"
          text="Work seamlessly without internet; sync updates automatically when connected."
          icon={<span><img src={image.offline}></img></span>}
        />

        <FeatureCard
          title="Audit Trail"
          text="Immutable logs ensure trust and fairness in every transaction."
          icon={<span><img src={image.group}></img></span>}
        />

        <FeatureCard
          title="Multi-Language Support"
          text="Use the app in Kinyarwanda, Swahili, English or Luganda for easy access."
          icon={<span><img src={image.multilingual}></img></span>}
        />

        <FeatureCard
          title="AI Financial Insights"
          text="Get smart suggestions for savings, investments, and group growth."
          icon={<span><img src={image.ai}></img></span>}
        />
      </div>
    </section>
  );
}

export default Features;
